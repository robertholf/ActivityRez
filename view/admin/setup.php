<?php

/* Run Tasks */

	// Reset Session if needed
	if ($_GET["action"] == 'unlink') {
		remoteAuthLogout();
	}

	// Import Web Bookers
	if ($_GET["action"] == 'import') {
		$wbID = $_POST['wbID'];
		webbooker_import($wbID);
	}


/* Check Data */

	// Get Posted Values
	$options = get_option( 'arez_options' );
		$authorized = $options['authorized'];
		$api_key = $options['api_key'];

	// Are there webbookers already loaded?
	$webbookers_count = webbooker_count();
		if( $webbookers_count > 0){
			$haswebbookers = true;
		} else {
			$haswebbookers = false;
		}


/* Fetch Data */

	// Attempt to download web bookers
	webbooker_fetch();
	if ( !get_option( 'arez_webbooker_import' ) ) {
	} else {
		// Get WebBookers
		$webbookers_temp = get_option( 'arez_webbooker_import' );
	}



?>
<div class="arez-content">
	<div class="arez-frame">
		<div class="header">
			<nav role="navigation" class="header-nav drawer-nav nav-horizontal">
				<div class="activityrez-logo">
					<a href="http://activityrez.com" target="_blank" title="Home" class="current"><img src="<?php echo ACTIVITYREZWB_PLUGIN_PATH; ?>assets/images/activityrez-logo-white.png"></a>
						<?php if ($authorized) {?>
							(<a href="<?php echo $_SERVER['REQUEST_URI'] .'&action=unlink'; ?>">Unlink</a>)
						<?php } ?>
				</div>
			</nav>
		</div><!-- .header -->
		<div class="wrapper">

			<div class="masthead">
				<h1>Connect your inventory</h1>
				<?php
				// Are we already setup?
				if ($haswebbookers) {
					?>
					<div id="webbookers" class="postbox"  style="width: 50%">
						<h3><span>You currently have the following web bookers imported:</span></h3>
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
								<a href="post.php?post=<?php echo $wb->ID;?>&action=edit"><?php echo $wb->post_title; ?></a> <em><small><?php echo $webbooker_id; ?></small></em> <?php echo $wb->post_status; ?>
								<a class="button secondary-button" href="options-general.php?page=arez_plugin&translate[]=<?php echo $webbooker_id;?>">
									<?php _e("Fetch Translations",'arez');?>
								</a>
							</div>
						<?php
						}
						?>
						</div>
					</div>
					<br/>
					<a class="button button-primary" href="options-general.php?page=arez_plugin&a=update">
						<?php _e("Update WebBookers",'arez');?>
					</a>
					<?php
				} else { // Has web Bookers

					?>
					<div id="webbookers" class="postbox" style="width: 50%">
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
							?>
							<br/>
							<input type="submit" class="btn btn-primary" value="Import WebBookers">
							</form>
						</div>
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
