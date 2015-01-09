<?php

/*
 * ActivityRezWB_Init Class
 *
 * These are core functions needed to enable a WordPress plugin shell
 * and handle common plugin functions like activation & uninstall, etc.
 */

class ActivityRezWB_Init {


	// *************************************************************************************************** //
	/*
	 * 
	 */

		public static function init(){

			/*
			 * Internationalization
			 */

				// Identify Folder for PO files
				load_plugin_textdomain( ACTIVITYREZWB_TEXTDOMAIN, false, basename( dirname( __FILE__ ) ) . '/assets/languages/' );


		}



	// *************************************************************************************************** //

	/*
	 * Plugin Activation
	 * Run when the plugin is installed.
	 */

		public function activation(){

			// Required for all WordPress database manipulations
			global $wpdb;


			// Initialize Options
			if(!get_option("arez_options")) {

				// Set Default Options
				$arez_options_arr = array(
					"api_key" => "",
					"server" => "",
					"authorized" => false,
					"username" => "",
					"password" => "",
					"setup" => false,
				);

				// Update Options
				update_option("arez_options",$arez_options_arr);

			}


			// Does the user have permission to activate the plugin
			if ( !current_user_can('activate_plugins') )
				return;


			// If Remote Update Web booker Houlry
			if ( ACTIVITYREZWB_REMOTE ){
				$options = get_option( 'arez_options' );
				if( !isset($options['server']) ){
					$options['server'] = 'secure';
					update_option('arez_options',$options);
					$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1 ) );
					foreach( $webbookers as $wb ){
						$wbMeta = get_post_meta($wb->ID);
						if( !isset($wbMeta['include_header']) ){
							update_post_meta($wb->ID,'include_header',1);
						}
						if( !isset($wbMeta['include_footer']) ){
							update_post_meta($wb->ID,'include_footer',1);
						}
					}
				}
				wp_schedule_event( time(), 'hourly', array('ActivityRezWB_Data', 'webbooker_update') );
			}
		}


	/*
	 * Plugin Deactivation
	 * Cleanup when complete
	 */

		public function deactivation(){

			// Release Scheduled Checks
			wp_clear_scheduled_hook( array('ActivityRezWB_Data', 'webbooker_update') );

		}



	/*
	 * Plugin Uninstall
	 * Cleanup when complete
	 */

		public function uninstall(){

			// Delete Saved Settings
			delete_option('arez_options');

			// Redirect back to Plugins
			echo "<div style=\"padding:50px;font-weight:bold;\"><p>". __("Almost done...", ACTIVITYREZWB_TEXTDOMAIN) ."</p><h1>". __("please uninstall on plugins page.", ACTIVITYREZWB_TEXTDOMAIN) ."</h1><a href=\"plugins.php?deactivate=true\">". __("Please click here to complete the uninstallation process", ACTIVITYREZWB_TEXTDOMAIN) ."</a></h1></div>";
			die;

		}


	/*
	 * Flush Rewrite Rules
	 * Remember to flush_rules() when adding rules
	 */

		public function flush_rules(){

			global $wp_rewrite;
			$wp_rewrite->flush_rules();

		}


	// *************************************************************************************************** //

	/*
	 * Update Needed
	 * Is this an updated version of the software and needs database upgrade?
	 */

		public function check_update_needed(){

			// Hold the version in a seprate option
			if(!get_option("rb_agency_version")) {
				update_option("rb_agency_version", rb_agency_VERSION);
			} else {
				// Version Exists, but is it out of date?
				if(get_option("rb_agency_version") <> rb_agency_VERSION){
					require_once(WP_PLUGIN_DIR . "/" . basename(dirname(__FILE__)) . "/upgrade.php");
				} else {
					// Namaste, version is number is correct
				}
			}
		}


	/*
	 * Upgrade Check
	 * Is there a newer version of the software available to upgrade to?
	 */

		public function check_upgrade_available(){
			//if(!class_exists("RBAgency_Update"))
				//require_once("update.php");

			//return RBAgency_Update::check_version($update_plugins_option, true);
		}



}
