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
					echo "<hr />Get Activities";
					var_dump($arezApi->GetActivities());


				?>
			</div><!-- .masthead -->
		</div><!-- .wrapper -->

	</div><!-- .arez-frame -->
</div><!-- .arez-content -->


<div class="clear"></div></div>
