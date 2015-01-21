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

		public static function init(){


				// Assign shortcodes
				add_shortcode("activityrez_activity",array("ActivityRezWB_Shortcode","get_activity"));
				
				// Load WebBooker global variables
				add_action("wp_enqueue_scripts",array("ActivityRezWB_Shortcode","global_vars"));
				
				// Load scripts
				wp_enqueue_script( 'jquery' );
/*				wp_register_script( 'knockoutjs', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/lib/knockout.min.js' );
				wp_enqueue_script( 'knockoutjs' );
				wp_register_script( 'bootstrapjs', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/lib/bootstrap.min.js' );
				wp_enqueue_script( 'bootstrapjs' );
*/
				// Get Webbooker script
				wp_register_script( 'ActivityRezWB_Shortcode_webbooker', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/webbooker.js' );
				wp_enqueue_script( 'ActivityRezWB_Shortcode_webbooker' );
				
				// Activity view
				//wp_register_script( 'ActivityRezWB_Shortcode_activity', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/activity.js');
				//wp_enqueue_script( 'ActivityRezWB_Shortcode_activity' );

				// load scripts in the footer
				add_action("wp_footer",array("ActivityRezWB_Shortcode","init_script"));
				
		}

		/*
		 * Get WebBooker Global variables and load on top of the scripts
		*/
		public static function global_vars(){
				
				// Call the ActivityRez API
				include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
				$arezApi = ActivityRezAPI::instance();

				// Authenticate
				$options = get_option( 'arez_options' );
				$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );

				// Get WebBooker
				$wb = $arezApi->getWebBooker(200015);
				unset($wb["data"]["style"]);
				unset($wb["data"]["featured_activities"]);
				unset($wb["data"]["header"]);
				unset($wb["data"]["footer"]);
				unset($wb["data"]["terms"]);
				unset($wb["data"]["contact"]);
				unset($wb["data"]["privacy"]);
				unset($wb["data"]["cancellation"]);
				
				$webBooker = array_merge($wb["data"],array("plugin_url" => ACTIVITYREZWB_PLUGIN_URL));	
				
				echo "<script type=\"text/javascript\">\n";
				echo "var wb_global_vars = ".json_encode($webBooker).";\n";
				echo " console.log(wb_global_vars);";
				echo "</script>\n";
		}

		/*
		* Init WebBooker scripts in the footer
		*/
		public static function init_script(){
				echo "<script type=\"text/javascript\">\n";
				?>
						
					  jQuery(document).ready(function(){
					  		
					  		var banner = ['<div class="bannerImage">',
					  		'<div class="carousel slide" id="myCarousel">',
					           '<div class="carousel-inner">',
					                '<div class="item slide1">',
					                    
					                '</div>',
					                '<div class="item slide2">',
					                    
					                '</div>',
					                '<div class="item slide3">',
					                    
					                '</div>',
					  		'</div>',
					  	'</div>',
					  '</div>',
					  '<div class="homeBody">',
					    '<h2>Featured Activities</h2>',
					    '<ul class="featuredActivities clearfix" data-bind="foreach: WebBooker.Homepage.featured_destinations">',
					        '<!-- ko if: activities().length > 0 -->',
					        '<!-- ko foreach: activities -->',
					        '<li>',
					            '<a class="featLink" data-bind="attr: { &#39;href&#39;: url }">',
					                '<div class="min-img-height">',
					                    '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-bind="attr: { &#39;src&#39;: thumbnail_url }, visible: thumbnail_url" alt="Safari!" />',
					                '</div>',
					              	'<div class="details">',
					                	'<div class="feat-item-desc" data-bind="html: title"></div>',
					                    '<p class="detDesc" data-bind="text: shortDesc"></p>',
					                  	'<p class="detPrice">Prices starting at: <span data-bind="money: prices[0].amount"></span></p>',
					              '</div>',
					            '</a>',
					        '</li>',
					        '<!-- /ko -->',
					        '<!-- /ko -->',
					    '</ul>',
					    '<div class="cb"></div>',
					'</div>'].join('');
					  		jQuery('#search-filters-date .collapse-me').show();
					  		jQuery('.heading').after(banner);
					  		if(window.location.hash == '#/Home'){
					 			jQuery('.bannerImage, .homeBody').show();
					    		jQuery('#webbooker, #search-filters, .footer').removeAttr('style');
					  		} else{
					  			jQuery('#webbooker').css({'top': 116});
					  			jQuery('.footer').css({'top': 116});
					  			jQuery('.bannerImage, .homeBody').hide();
					  			jQuery('#search-filters').css({'top': -87});
					  		}
					  		Path.map('#/Home').enter(function(){
					  			jQuery('.bannerImage, .homeBody').show();
					  			jQuery('#search-filters, #webbooker, .footer').removeAttr('style');
					  		}).exit(function(){
					  			jQuery('#webbooker').css({'top': 116});
					  			jQuery('.footer').css({'top': 116});
					  			jQuery('#search-filters').css({'top': -87});
					  			jQuery('.bannerImage, .homeBody').hide();
					  		})
					  		jQuery('.carousel').carousel();
					  		ko.applyBindings(WebBooker,jQuery('.homeBody')[0]);
					 
					   	});
				<?php 
				echo "</script>\n";
		
		}

		/*
		* Get WebBooker Acitivity
		* Shortcode:  [activityrez_activity]
		*/
		public static function get_activity($atts, $content = null){

				
				ob_start();
				// TODO: ?
				// Should we keep it this way or add the whole code here instead of including files?
				include_once( ACTIVITYREZWB_PLUGIN_DIR .'view/php/activity.php');
				
				$output_string  = ob_get_contents();
				ob_end_clean();
				return $output_string;
		}

}