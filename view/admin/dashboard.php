<div class="loader"></div>
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
				<h1>Connected!</h1>
				<?php
				
				// Call the ActivityRez API
					include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
					$arezApi = ActivityRezAPI::instance();

					// Authenticate
					$options = get_option( 'arez_options' );
					$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );
					echo "bootStrap: ";
					var_dump($arezApi->bootStrap());
					echo "Get Terms: ";
					var_dump($arezApi->GetTerms());
					echo "Get Privacy Policy: ";
					var_dump($arezApi->GetPrivacyPolicy());
					echo "Get POS Locations";
					var_dump($arezApi->GetPOSLocations());

					$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );
					
					echo "Get Destinations";
					var_dump($arezApi->GetDestinations());
					echo "Get Daily view";
					var_dump($arezApi->GetDailyView());
					echo "Get Inventory";
					var_dump($arezApi->GetInventory());
					echo "Get Activities";
					var_dump($arezApi->GetActivities());
					echo "Get Activity";
					var_dump($arezApi-> GetActivity());


				?>
			</div><!-- .masthead -->
		</div><!-- .wrapper -->

	</div><!-- .arez-frame -->
</div><!-- .arez-content -->


<div class="clear"></div></div>
