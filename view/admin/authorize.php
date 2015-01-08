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
		$server = $options['server'];
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
						<?php if ($authorized) {?>
							<span class="white unlink">(<a href="<?php echo $_SERVER['REQUEST_URI'] .'&action=unlink'; ?>">Unlink</a>)<span>
						<?php } ?>
					</div>
				</nav>
			</div><!-- .header -->
			<div class="wrapper">
			<?php 
			if( $_GET["action"] == "authorize" || !empty($username) || isset($_GET['settings-updated']) &&  $_GET['settings-updated'] == true){
				// Check Status
				if( $_GET['settings-updated'] == true ){
					$status_auth = remoteAuth();
				}
				?>
				<div id="step1" class="masthead">

					<?php
					if( $_GET['settings-updated'] == true && $status_auth == "success" ) { // Error Check 

						// User Auth Success!  Check for API Key
						$status_key = remoteKey();


						if ( $status_key == "success" ) {
							// Key Returned.
							?>
							<div class="alertbox success">
								<h4><?php echo __("Success!  Connection established.", ACTIVITYREZWB_TEXTDOMAIN); ?></h4>
							</div>

							<a href="?page=arez" class="cta">Continue</a>

							<?php
						} else {
							// Connected but no key returned.
							?>
							<div class="alertbox warning">
								<h4><?php echo __("No key returned.  Please contact ActivityRez Support.", ACTIVITYREZWB_TEXTDOMAIN); ?></h4>
							</div>
							<?php
						}



					} elseif( $_GET['settings-updated'] == true && $status_auth == "error" ) {
						?>
						<h1>Please confirm your ActivityRez credentials</h1>
						<div class="alertbox error">
							<h4><?php echo __("Invalid Username or Password", ACTIVITYREZWB_TEXTDOMAIN); ?></h4>
						</div>
						<?php

						// Show Form
						remoteAuth_form($username, $password, $server);

					} elseif ( !isset( $_GET['settings-updated'] ) ) {
						?><h1>Enter your ActivityRez credentials to get started</h1><?php

						// Show Form
						remoteAuth_form($username, $password, $server);

					}
					?>
					<div class="subhead">
						<h2>Need help? <a href="http://www.activityrez.com/contact/" target="_blank">Contact Us</a>!</h2>
					</div>
				</div><!-- .masthead -->

			<?php 
			} else { ?>
				<div class="masthead">
					<h1>ActivityRez's all-in-one application has everything an activity business needs to run smoothly.</h1>

					<a href="?page=arez&action=authorize" class="cta">Connect to Get Started</a>

					<div class="subhead">
						<h2>Once you’ve connected ActivityRez, you’ll be able to integrate your activities.</h2>
					</div>
				</div><!-- .masthead -->
			<?php } ?>
			</div><!-- .wrapper -->

		</div><!-- .arez-frame -->
	</div><!-- .arez-content -->
	<div class="clear"></div></div>



