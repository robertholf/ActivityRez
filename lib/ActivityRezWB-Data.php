<?php

/*
 * Fetch and cache all weboker data
 */

	// Form to get username and password
	function remoteAuth_form($username, $password, $server){
		?>
		<div id="login">
			<form method="post" action="options.php">
			<?php 
			settings_fields( 'arez_options_group' );
			?>
			<div class="onofflabel">Environment:</div>
			<div class="onoffswitch">
				<input type="checkbox" name="arez_options[server]" value='1' class="onoffswitch-checkbox" id="myonoffswitch" <?php echo checked(isset($server)?$server:0, 1, false); ?> >
				<label class="onoffswitch-label" for="myonoffswitch">
					<span class="onoffswitch-inner"></span>
					<span class="onoffswitch-switch"></span>
				</label>
			</div>
			<fieldset class="clearfix">
				<p><span>Username</span><input type="text" name='arez_options[username]' value='<?php echo $username; ?>' placeholder="Username" required></p>
				<p><span>Password</span><input type="password" name='arez_options[password]' value='<?php echo $password; ?>'  placeholder="Password" required></p>
			<p><input type="submit" value="Connect"></p>
			</fieldset>
			</form>
		</div> <!-- end login -->
		<?php
	}

	// Check username and password against database
	function remoteAuth(){

		// Check for saved credentials
		$options = get_option( 'arez_options' );
			$username = $options['username'];
			$password = $options['password'];

		// Check to ensure value exists
		if ( !empty($username) && !empty($password) ) {
			// Call the ActivityRez API
			include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
			$arezApi = ActivityRezAPI::instance();
			// Attempt to Authorize
			$response = $arezApi->r_authArez( $username, $password );

			// Output Response
			if( $response['status'] == 0 ) {
				$status = "error";
			} else {
				$options['authorized'] = true;
				update_option( 'arez_options', $options);

				$status = "success";
			}

		} else {
			// Default failure
			$status = "error";
		}

		// Output Response
		return $status;
	}


	// Log Out
	function remoteAuthLogout(){

		// Check for saved key
		$options = get_option( 'arez_options' );
			// Clear Authorized
			$options['authorized'] = false;
			update_option( 'arez_options', $options);

			// Clear Username
			$options['username'] = "";
			update_option( 'arez_options', $options);

			// Clear Username
			$options['password'] = "";
			update_option( 'arez_options', $options);

			// Clear Key
			$options['api_key'] = "";
			update_option( 'arez_options', $options);

	}



	// Get API key
	function remoteKey(){

		// Check for saved key
		$options = get_option( 'arez_options' );

		// Is API Key valid?
		if( !isset( $options['api_key'] ) ){
			//need the api key, go get it

			// Call the ActivityRez API
			include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
			$arezApi = ActivityRezAPI::instance();
			$apiKey = $arezApi->fetchApiKey();

			if( isset($apiKey['status']) && $apiKey['status'] == 1 ){
				// Key Found!  Save it!
				$options['api_key'] = $apiKey['api_key'];
				update_option( 'arez_options', $options);

				// Success
				$status = "success";
			} else {
				// Better luck next time
				$status = "error";
			}
		} else {
			// Better luck next time
			$status = "error";
		}

		// Output Response
		return $status;
	}

	// Get Web Bookers Count
	function webbooker_count(){
		$webbookers = new WP_Query( 'post_type=webBooker&post_status=publish' );
		return $webbookers->found_posts;
	}

	// Get Web Bookers
	function webbooker_fetch(){
		// Check for saved key
		$options = get_option( 'arez_options' );

		// Is API Key valid?
		if( isset( $options['api_key'] ) ){
			//need the api key, go get it

			// Call the ActivityRez API
			include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
			$arezApi = ActivityRezAPI::instance();

			// Attempt to Authorize
			$auth = $arezApi->r_authArez( $options['username'], $options['password'] );

			$ResultString = $arezApi->importWebbookers();
			
			if( isset($ResultString['status']) && $ResultString['status'] == '1' ){

				//Store the wb list and prompt the user wich ones they want to import
				$_webbookers = $ResultString['webBookers'];
				// Save Web Bookers
				update_option('arez_webbooker_import',json_encode($_webbookers) );

				// Success
				$status = "success";
			} else {
				// Better luck next time
				$status = "error";
			}
		} else {
			// Better luck next time
			$status = "error";
		}

		// Output Response
		return $status;
	}


	// Import Web Bookers
	function webbooker_import( $wbIDrequest = null ){

		//finish import job based off user selection
		$_webbookers = json_decode(get_option( 'arez_webbooker_import' ),1);
		$wbImportCount = 0;
		foreach( $_webbookers as $wb ){
			if($wb['post_status'] != 'publish') continue;
			if( !in_array($wb['ID'],$wbIDrequest) ) continue;
			$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1, 'meta_key'=>'webBookerID','meta_value'=>$wb['ID'] ) );
			if( !$webbookers || empty($webbookers)){
				$post = array('post_status'=>'publish','post_title'=>$wb['post_title'],'post_type'=>'webBooker');
				$post_id = wp_insert_post($post);
				update_post_meta($post_id,'webBookerID',$wb['ID']);
				update_post_meta($post_id,'include_header',1);
				update_post_meta($post_id,'include_footer',1);
				$wbImportCount++;
			} else {
				// Already been imported, skip this
				continue;
			}
		}
		// Clean up
		delete_option('arez_webbooker_import');

		// Return the number imported
		return $wbImportCount;
	}


	function webbooker_update( $webbookerID = null ){
		// Get Web Bookers
		$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1 ) );

		// Call the ActivityRez API
		include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
		$arezApi = ActivityRezAPI::instance();

		// Authenticate
		$options = get_option( 'arez_options' );
		$resp = $arezApi->r_authArez( $options['username'], $options['password'] );

		// Cache values
		global $wbCacheFields;
		$msg = '';
		if( !empty($webbookers) && is_array($webbookers)){
			// Loop
			foreach( $webbookers as $wb ){
				$wbID = get_post_meta($wb->ID,'webBookerID',true);
				if( !is_null($webbookerID)){//update a specific webbooker
					if( $wbID != $webbookerID) continue;
				}

				// Update Translation
				webbooker_translation($wbID);//update po files

				$CurlResult = $arezApi->getWebBooker($wbID);//cache wb data
				$msg .= sprintf(__("Refreshing Server Settings for %s \n<br>",'arez'),$wb->post_title);
				foreach( $wbCacheFields as $field ){
					if(isset($CurlResult['data'][$field])){
						update_post_meta($wb->ID,$field,$CurlResult['data'][$field]);
					}
				}
			}
		}
		return $msg;
	}


	function webbooker_translation( $webbookerID = null ){

		if ($webbookerID) {

			// Call the ActivityRez API
			include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
			$arezApi = ActivityRezAPI::instance();

			// Authenticate
			$options = get_option( 'arez_options' );
			$resp = $arezApi->r_authArez( $options['username'], $options['password'] );

			// Update translation files
			$CurlResult = $arezApi->fetchTranslations($webbookerID);
			$tmp_zip = tempnam ("/tmp", 'translations_');
			if($tmp_zip){
				file_put_contents( $tmp_zip,  $CurlResult);
				$base = WP_CONTENT_DIR;
				chdir($base);
				$cmd = 'cd '.$base.' && /usr/bin/unzip '.$tmp_zip;
				exec($cmd);
				unlink($tmp_zip);

				$status = "success";
			}
			$status = "error";
		} else {
			// Better luck next time
			$status = "error";
		}

		// Output Response
		return $status;
	}
