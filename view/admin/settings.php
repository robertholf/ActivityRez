<?php

/* Run Tasks */

	// Reset Session if needed
	if ($_GET["action"] == 'unlink') {
		remoteAuthLogout();
	}


/* Check Data */

	// Get Posted Values
	$options = get_option( 'arez_options' );
		$authorized = $options['authorized'];
		$username = $options['username'];
		$password = $options['password'];
		$api_key = $options['api_key'];

	// Are there webbookers already loaded?
	$webbookers_count = webbooker_count();
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

				<h1>Account</h1>
				<div id="webbookers" class="postbox"  style="width: 50%">
					<?php
					// Show Auth Check
					if ($authorized) {
						echo '<h3><span>You are connected!</span></h3>';
						echo 'Connected as <strong>'. $username .'</strong><br />';
						echo 'With key as <strong>'. $api_key .'</strong><br />';
						echo '<br /><a href="'. $_SERVER['REQUEST_URI'] .'&action=unlink" class="button">Unlink</a>';
					}
					?>
				</div>

				<h1>Web Bookers</h1>
					<?php
					// Are we already setup?
					if ($haswebbookers) {
						?>
						<div id="webbookers" class="postbox"  style="width: 50%">
							<h3><span>You have the following web bookers:</span></h3>
							<div class="inside">
							<?php
							// Get Webbookers
							$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1, 'post_status'=>'publish' ) );

							// Show Results
							foreach($webbookers as $wb){
								$meta = get_post_meta( $wb->ID );
								$webbooker_id = 0;
								if(isset($meta['webBookerID'])){
									$webbooker_id = $meta['webBookerID'][0];
								}
								?>
								<div>
									<a href="post.php?post=<?php echo $wb->ID;?>&action=edit"><?php echo $wb->post_title; ?></a> <em><small><?php echo $webbooker_id; ?></small></em>
									<a class="button secondary-button" href="options-general.php?page=arez_plugin&translate[]=<?php echo $webbooker_id;?>">
										<?php _e("Fetch Translations",'arez');?>
									</a>
								</div>
							<?php
							}
							?>
							<br/>
							<a class="button button-primary" href="options-general.php?page=arez_plugin&a=update">
								<?php _e("Update WebBookers",'arez');?>
							</a>
							</div>
						</div>
						<?php
					}


				// Temporary Data

					if ($_GET["action"] == 'purgetempdata') {
						delete_option('arez_webbooker_import');
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

<div class="wrap">
	<h1>Integration</h1>
	The following reference will help integrate the ActivityRez plugin into your website.

	<h2>Short Codes</h2>


	<h2>Widgets</h2>
</div>


<div class="clear"></div>