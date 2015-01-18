<div id="preloader">
	<div id="spinner_container">
		<img id="spinner" src="http://bradsknutson.com/wp-content/uploads/2013/04/page-loader.gif" alt="" />
	</div>
</div>
<?php

/* Run Tasks */

	// Reset Session if needed
	if (isset($_GET["action"]) && $_GET["action"] == 'unlink') {
		ActivityRezWB_Data::remote_auth_logout();
	}

	// Import Web Bookers
	if (isset($_GET["action"]) && $_GET["action"] == 'import') {
		$wbID = $_POST['wbID'];
		ActivityRezWB_Data::webbooker_import($wbID);
	}


/* Check Data */

	// Get Posted Values
	$options = get_option( 'arez_options' );
		if (isset($options['authorized'])) {
			$authorized = $options['authorized'];
		} else {
			$authorized = "";
		}
		if (isset($options['api_key'])) {
			$api_key = $options['api_key'];
		} else {
			$api_key = "";
		}

	// Are there webbookers already loaded?
	$webbookers_count = ActivityRezWB_Data::webbooker_count();
		if( $webbookers_count > 0){
			$haswebbookers = true;
		} else {
			$haswebbookers = false;
		}


/* Fetch Data */

	// Attempt to download web bookers
	ActivityRezWB_Data::webbooker_fetch();
	if ( !get_option( 'arez_webbooker_import' ) ) {
		$webbookers_temp = null;
	} else {
		// Get WebBookers
		$webbookers_temp = get_option( 'arez_webbooker_import' );
	}


$status_key = ActivityRezWB_Data::remote_apikey();

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

			<div class="masthead">
				<?php
				// Are we already setup?
				if ($haswebbookers) {
					?>
					<h1>All Set!</h1>
					<a class="btn btn-primary" href="<?php echo admin_url( 'admin.php?page=arez' ); ?>">
						<?php _e("Take A Tour", ACTIVITYREZWB_TEXTDOMAIN);?>
					</a>
					<span class="white"><a href="<?php echo admin_url( 'admin.php?page=arez' ); ?>">Skip</a></span>
					<?php
				} else { // Has web Bookers

					?>
				<h1>Connect your inventory</h1>
					<div id="webbookers" class="postbox" style="width: 50%">
						<?php
						if (isset($webbookers_temp)) {
							?>
							<h3><span>Please select the webbooker you would like to import:</span></h3>
							<div class="inside">
								<form action="<?php echo admin_url( 'admin.php?page=arez&action=import' ); ?>" method="post">
								<?php
									// Manage current web bookers
									$webbookers = json_decode($webbookers_temp);

									// Loop through temporary records
									$i = 0;
									foreach($webbookers as $webbooker) {
										foreach($webbooker as $key => $value) {
											${$key} = $value;
										}
										?>
										<div>
											<input type="checkbox" name="wbID[<?php echo $i;?>]" value="<?php echo $ID;?>">
											<?php echo $post_title; ?> <em><small><?php echo $ID; ?></small></em>
										</div>
										<?php
										$i++;
									}

									// Check we got soemthing.
									if ($i > 0) { ?>
										<br/>
										<input type="submit" class="btn btn-primary" value="Import WebBookers">
									<?php
									} else {
										echo "Error in retrieving web bookers, please try again. <i><small>Code: WBAUTH001</small></i>";
									}
								?>
								</form>
							</div>
						<?php 
						} else {
							// There are no temp bookers 
							echo "Error in retrieving web bookers, please try again. <i><small>Code: WBAUTH002</small></i>";
						}
						?>
					</div>
					<?php
				}

				?>

				<div class="subhead">
					<h2></h2>
				</div>

			</div><!-- .masthead -->
		</div><!-- .wrapper -->

	</div><!-- .arez-frame -->
</div><!-- .arez-content -->


<div class="clear"></div></div>
