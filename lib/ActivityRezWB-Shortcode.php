<?php

/*
 * ActivityRezWB_Shortcode Class
 *
 * These are shortcode specific functions
 */

class ActivityRezWB_Shortcode {

	// *************************************************************************************************** //

	/*
	 * Initialize
	 */
		private static $webBookerID = null;

		public static function init(){
				
				// Assign shortcodes
				add_shortcode("activityrez",array("ActivityRezWB_Shortcode","get_activity"));

				// Get Webbooker script
				wp_register_script( 'ActivityRezWB_Shortcode_webbooker', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/webbooker.js',array(),0,true);
				wp_register_script( 'ActivityRezWB_Shortcode_webbooker_activity', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/activity-init.js',array(),0,true);
				
				// Load scripts
				wp_enqueue_script( 'jquery' );
				wp_enqueue_script( 'jquery-ui-datepicker' );
				wp_enqueue_script( 'ActivityRezWB_Shortcode_webbooker' );
				wp_enqueue_script( 'ActivityRezWB_Shortcode_webbooker_activity' );
	
				
				
		}


		/*
		 * Populate Global vars 
		*/
		public static function load_activity(){

				// Call the ActivityRez API
				include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
				$arezApi = ActivityRezAPI::instance();

				// Authenticate
				$options = get_option( 'arez_options' );
				$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );

				// Get WebBooker
				$wb = $arezApi->getWebBooker(self::$webBookerID);
				unset($wb["data"]["style"]);
				unset($wb["data"]["featured_activities"]);
				unset($wb["data"]["header"]);
				unset($wb["data"]["footer"]);
				unset($wb["data"]["terms"]);
				unset($wb["data"]["contact"]);
				unset($wb["data"]["privacy"]);
				unset($wb["data"]["cancellation"]);
				
				$webBooker = array_merge($wb["data"],
											array("plugin_url" => ACTIVITYREZWB_PLUGIN_URL),
											array("wb_url" => "//".$_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] )
										);	
				
				echo "<script type=\"text/javascript\">\n";
				echo "var wb_global_vars = ".json_encode($webBooker).";\n";
				echo "</script>\n";
		}

		
		/*
		* Get WebBooker Acitivity
		* Shortcode:  [activityrez]
		*/
		public static function get_activity($atts, $content = null){
				ob_start();
				
				
				extract(shortcode_atts(array(
							"wbID" => null
						), $atts));
				
				self::$webBookerID = $atts["wbid"];
				
				// load scripts in the footer
				add_action("wp_footer",array("ActivityRezWB_Shortcode","load_activity"));
				
				// load scripts in the footer
				add_action("wp_footer",array("ActivityRezWB_Shortcode","init_script"));
								

				
				echo "<div class='heading'></div>";
				//include_once( ACTIVITYREZWB_PLUGIN_DIR .'view/php/activity.php');
				//include_once( ACTIVITYREZWB_PLUGIN_DIR .'view/php/search.php');
				include_once( ACTIVITYREZWB_PLUGIN_DIR .'view/php/_main-webbooker.php');
				
				$output_string  = ob_get_contents();
				ob_end_clean();
				return $output_string;
		}

}