<?php
	// Reset Session if needed
	if ($_GET["action"] == 'unlink') {
		remoteAuthLogout();
	}

	// Get Posted Values
	$options = get_option( 'arez_options' );
		$authorized = $options['authorized'];
		$api_key = $options['api_key'];

	// Attempt to download web bookers
	if ( !get_option( 'arez_webbooker_import' ) ) {
		webbooker_fetch();
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
				<h1>Almost there... </h1>
				<?php
				$webbookers_temp = get_option( 'arez_webbooker_import' );
				?>
							<div id="webbookers" class="postbox"  style="width: 50%">
								<h3>
									<span>Select Which WebBooker's To Import</span>
								</h3>
								<div class="inside">
									<table class="wp-list-table widefat fixed">
										<thead>
											<tr>
												<th width="10%"><?php _e("Select",'arez');?></th>
												<th width="10%"><?php _e("ID",'arez');?></th>
												<th width="80%"><?php _e("Name",'arez');?></th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th width="10%"><?php _e("Select",'arez');?></th>
												<th width="10%"><?php _e("ID",'arez');?></th>
												<th width="80%"><?php _e("Name",'arez');?></th>
											</tr>
										</tfoot>
										<tbody>
											<?php
												$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1, 'post_status'=>'publish' ) );
												$i = 0;
												foreach($_webbookers as $wb){
													if( 'publish' != $wb['post_status']) continue;
											?>
												<tr>
													<td><input type="checkbox" name="wbID[<?php echo $i;?>]" value="<?php echo $wb['ID'];?>"></td>
													<td><?php echo $wb['ID']; ?></td>
													<td><?php echo $wb['post_title']; ?> </td>
												</tr>
										<?php
													$i++;
												}
											?>
										</tbody>
									</table>
									<br/>
									<button class="button button-primary" name="a" value="import_finish">
										<?php _e("Import WebBookers",'arez');?>
									</a>
									<br/>
								</div>
							</div>


				<h2>Which web bookers would you like to install?</h2>
				<?php

				?>

				<div class="subhead">
					<h2>Once you’ve connected ActivityRez, you’ll be able to integrate your activities.</h2>
				</div>

			</div><!-- .masthead -->
		</div><!-- .wrapper -->

	</div><!-- .arez-frame -->
</div><!-- .arez-content -->


<div class="clear"></div></div>
