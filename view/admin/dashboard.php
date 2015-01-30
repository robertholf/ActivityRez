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
					echo "<h1><a href='/wb/". $wb->post_name ."'>". $wb->post_title ."</a></h1>";
				}
				?>
				<div class="subhead">
					<h2>Preview Web Bookers</h2>
				</div>

			</div><!-- .masthead -->
		</div><!-- .wrapper -->

	</div><!-- .arez-frame -->
</div><!-- .arez-content -->

<div class="clear"></div></div>