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
			<?php 
			if( $_GET["action"] == "authorize" ){ 
				if( $_GET['settings-updated'] == true ){
				?>

				<?php
				$options = get_option( 'arez_options' );
				// If API key is not present then prompt setup
				echo $options['api_key'] ."<br />";
				echo $options['username'] ."<br />";
				echo $options['password'] ."<br />";



					?>
				<?php
				} else { ?>

				<div id="step1" class="masthead">
					<h1>Enter your ActivityRez credentials to get started</h1>
					<div id="login">
						<form method="post" action="options.php">
						<?php 
						settings_fields( 'arez_options_group' );
						?>
						<fieldset class="clearfix">
							<p><span>Username</span><input type="text" name='arez_options[username]' value="Username" onBlur="if(this.value == '') this.value = 'Username'" onFocus="if(this.value == 'Username') this.value = ''" required></p> <!-- JS because of IE support; better: placeholder="Username" -->
							<p><span>Password</span><input type="password" name='arez_options[password]'  value="Password" onBlur="if(this.value == '') this.value = 'Password'" onFocus="if(this.value == 'Password') this.value = ''" required></p> <!-- JS because of IE support; better: placeholder="Password" -->
							<p><input type="submit" value="Connect"></p>
						</fieldset>
						</form>
					</div> <!-- end login -->

					<div class="subhead">
						<h2>Need help? Contact us!</h2>
					</div>
				</div><!-- .masthead -->

			<?php 
				} // End Auth
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



