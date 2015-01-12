<?php
if (!current_user_can('manage_options')) {
	wp_die('You do not have sufficient permissions to access this page.');
}
?>
<div id="preloader">
	<div id="spinner_container">
		<img id="spinner" src="http://bradsknutson.com/wp-content/uploads/2013/04/page-loader.gif" alt="" />
	</div>
</div>
<div id="postloader">
<?php

/* Run Tasks */

	// Reset Session if needed
	if (isset($_GET["action"]) && $_GET["action"] == 'unlink') {
		ActivityRezWB_Data::remoteAuthLogout();
	}

	// Get Translations
	if (isset($_GET["action"]) && $_GET["action"] == 'translate' && isset($_GET["wb"]) ) {
		$webbookerID = $_GET["wb"];
		// Process
		$status_translation = ActivityRezWB_Data::webbooker_translation($webbookerID);
	}

	// Update
	if (isset($_GET["action"]) && $_GET["action"] == 'update' ) {
		// Process
		$status_update = ActivityRezWB_Data::webbooker_update();
	}

	// Permalink: Dismiss
	if (isset($_GET["action"]) && $_GET["action"] == 'permalink-dismiss' ) {
		// Set Option
		update_option( 'arez_webbooker_permalinkignore', true );
	}

	if ( (isset($_GET["action"]) && $_GET["action"] ==  'permalink-fix' ) ) {
		// Change Permalinks
		ActivityRezWB_Init::permalinks_change();
	}


/* Clean Data */

	// Delete Web Booker
	if (isset($_GET["action"]) && $_GET["action"] == 'delete' && isset($_GET["wb"]) ) {
		$deadpostwalking = get_posts( array( 'post_type'=>'webBooker', 'meta_value' => 'webBookerID', 'meta_value' =>$_GET["wb"]) );
		foreach( $deadpostwalking as $post ) {
		// Delete's each post.
			wp_delete_post( $post->ID, true);
		}
	}

	// Delete Temporary Data
	if (isset($_GET["action"]) && $_GET["action"] == 'purgetempdata') {
		delete_option('arez_webbooker_import');
	}


/* Check Data */

	// Get Posted Values
	$options = get_option( 'arez_options' );
		$authorized = $options['authorized'];
		$server = $options['server'];
		$username = $options['username'];
		$password = $options['password'];
		$api_key = $options['api_key'];

	// Are there webbookers already loaded?
	$webbookers_count = ActivityRezWB_Data::webbooker_count();
		if( $webbookers_count > 0){
			$haswebbookers = true;
		} else {
			$haswebbookers = false;
		}


?>

	<div class="arez-content">
		<div class="arez-frame">
			<div class="header">
				<nav role="navigation" class="header-nav drawer-nav nav-horizontal">
					<div class="activityrez-logo">
						<a href="http://activityrez.com" target="_blank" title="Home" class="current"><img src="<?php echo ACTIVITYREZWB_PLUGIN_PATH; ?>assets/images/activityrez-logo-white.png"></a>
					</div>
				</nav>
			</div><!-- .header -->
			<div class="wrapper">

				<div class="masthead">

					<?php
					/*
					 * Run Diagnostics 
					 */

						// Check Permalinks
						if ( ! get_option('permalink_structure') ) {
							// Check if they ignored this warning
							if ( get_option( 'arez_webbooker_permalinkignore' ) !== true ) {
							echo '<div class="error"><p><strong>WARNING:</strong> Your permalinks are not set.  This could make the plugin not work correctly.  Please select an option below:</p>';
							echo ' <a href="'. admin_url("admin.php?page=arez-settings&action=permalink-dismiss") .'">Ignore this message</a> | ';
							echo ' <a href="'. admin_url("options-permalink.php") .'">Fix them yourself</a> | ';
							echo ' <strong><a href="'. admin_url("admin.php?page=arez-settings&action=permalink-fix") .'">Fix them automatically</a> (Recommended)</strong>';
							echo '</div>';

							}
						}


					?>
					<h1>Account</h1>
					<div id="webbookers" class="postbox"  style="width: 50%">
						<?php
						// Show Auth Check
						if ($authorized) {
							echo '<h3><span>You are connected!</span></h3>';
							echo 'Connected as <strong>'. $username .'</strong><br />';
							echo 'with key <strong>'. $api_key .'</strong>';
							if ($server) { echo ' on production server.'; } else { echo ' on training server.'; }
							echo '<br /><a href="'. $_SERVER['REQUEST_URI'] .'&action=unlink" class="btn">Unlink</a>';
						} else {
							echo "You are not yet authenticated.  Please start the setup process.";
							echo '<br /><a href="'. admin_url( 'admin.php?page=arez&action=authorize' ) .'" class="btn btn-primary">Start Setup</a>';
						}
						?>
					</div>

						<?php
						// Are we already setup?
						if ($haswebbookers && $authorized) {
							?>
							<h1>Web Bookers</h1>

							<div id="webbookers" class="postbox"  style="width: 50%">
								<h3><span>You have the following web bookers:</span></h3>
								<div class="inside">
								<?php
								if (isset($_GET["action"]) && $_GET["action"] == 'translate' && $status_translation == "error") {
									echo '<div class="alertbox warning">';
									echo '<h4>'. __("Error in updating translation", ACTIVITYREZWB_TEXTDOMAIN) .'</h4>';
									echo '</div>';
								} elseif (isset($_GET["action"]) && $_GET["action"] == 'translate' && $status_translation == "sucess") {
									echo '<div class="alertbox success">';
									echo '<h4>'. __("Translation updated successfully", ACTIVITYREZWB_TEXTDOMAIN) .'</h4>';
									echo '</div>';
								}

								// Get Webbookers
								$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1, 'post_status'=>'publish' ) );

								// Show Results
								foreach($webbookers as $wb){
									$meta = get_post_meta( $wb->ID );
									$webbooker_id = 0;
									if(isset($meta['webBookerID'])){
										$webbooker_id = $meta['webBookerID'][0];
									}
									echo "<div>";
									echo "  <em><small><?php echo $webbooker_id; ?></small></em>";
									echo "  ". $wb->post_title ."";
									echo "  <a href='post.php?post=". $wb->ID ."&action=edit'>Preview</a> | ";
									echo "  <a href='". admin_url( 'admin.php?page=arez-settings&action=translate&wb='.$webbooker_id ) ."'>". __('Fetch Translations', ACTIVITYREZWB_TEXTDOMAIN) ."</a>  | ";
									echo "  <a href='". admin_url( 'admin.php?page=arez-settings&action=delete&wb='.$webbooker_id ) ."' style='color: red;'>". __('Delete',ACTIVITYREZWB_TEXTDOMAIN) ."</a>";
									echo "</div>";
								}
								echo "<br />";
								echo "  <a class='btn btn-primary' href='". admin_url( 'admin.php?page=arez-settings&action=update' ) ."'>". __('Update WebBookers',ACTIVITYREZWB_TEXTDOMAIN) ."</a>";

								?>
								</div>
							</div>
							<?php
						}

						// Check temporary data
						$webbookers_temp = get_option( 'arez_webbooker_import' );
						if ( !empty($webbookers_temp) ) {
							echo "<h1>Temp Web Booker Data</h1>";
							print_r($webbookers_temp);
							echo "<a href='?page=arez-settings&action=purgetempdata'>Purge Temp Data</a>";
						}

					?>

					<div class="subhead">
						<h2></h2>
					</div>

				</div><!-- .masthead -->
			</div><!-- .wrapper -->

		</div><!-- .arez-frame -->
	</div><!-- .arez-content -->

	<div style="z-index: 9999; position: relative; margin-left: 150px; top: -150px;">
		<h2>Diagnostic Check</h2>
		<?php

		// PHP Version
		echo '<div><strong>'. __("PHP Version", ACTIVITYREZWB_TEXTDOMAIN) .'</strong>: ';
		echo '  <img src="'. ACTIVITYREZWB_PLUGIN_PATH .'assets/images/success.png" /> <span>'. phpversion() .'</span></div>';

		// WordPress Version
		echo '<div><strong>'. __("WordPress Version", ACTIVITYREZWB_TEXTDOMAIN) .'</strong>: ';
			if (version_compare(get_bloginfo('version'), ACTIVITYREZWB_VERSION_WP_MIN, '>=') ) {
			echo '<img src="'. ACTIVITYREZWB_PLUGIN_PATH .'assets/images/success.png" /> <span>'. get_bloginfo('version') .'</span></div>';
			} else {
			echo '<img src="'. ACTIVITYREZWB_PLUGIN_PATH .'assets/images/error.png" /> <span class="red">Upgrade to at least version '. ACTIVITYREZWB_VERSION_WP_MIN .'</span>';
			}

		// Permalinks
		echo '<div><strong>'. __("Permalinks", ACTIVITYREZWB_TEXTDOMAIN) .'</strong>: ';
			if ( ! get_option('permalink_structure') ) {
			echo '<img src="'. ACTIVITYREZWB_PLUGIN_PATH .'assets/images/error.png" /> <span class="red">Needs fixing. <a href="'. admin_url("admin.php?page=arez-settings&action=permalink-fix") .'">Fix Now</a></span>';
			} else {
			echo '<img src="'. ACTIVITYREZWB_PLUGIN_PATH .'assets/images/success.png" /> <span>Set Accurately</span>';
			}
		echo '</div>';

		?>
	</div>

	<div class="clear"></div>

</div>