<?php

/*
 * ActivityRezWB_App Class
 *
 * These are application specific functions
 */

class ActivityRezWB_App {


	// *************************************************************************************************** //

	/*
	 * Custom Post Type Taxonomy
	 */

		public static function post_type() {

		/* Taxonomy */

			// Define Labels 
			$labels = array(
				'add_new' => __('Add Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'add_new_item' => __('Add New Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'edit' => __('Edit', ACTIVITYREZWB_TEXTDOMAIN),
				'edit_item' => __('Edit Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'name' => __('Web Bookers', ACTIVITYREZWB_TEXTDOMAIN),
				'new_item' => __('New Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'not_found' => __('No Web Bookers found', ACTIVITYREZWB_TEXTDOMAIN),
				'not_found_in_trash' => __('No Web Bookers found in trash', ACTIVITYREZWB_TEXTDOMAIN),
				'search_items' => __('Search Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'singular_name' => __('Web Booker', ACTIVITYREZWB_TEXTDOMAIN),
				'view' => __('View Web Bookers', ACTIVITYREZWB_TEXTDOMAIN),
				'view_item' => __('View Web Booker', ACTIVITYREZWB_TEXTDOMAIN)
			);

			// Register Post Types
			$args = array(
				'public' => true,
				'show_ui' => true,
				'show_in_menu'=> false, // arez
				'exclude_from_search'=>true,
				'capability_type' => 'post',
				'hierarchical' => true,
				'rewrite' => array('slug'=>'wb', 'with_front'=>true),
				'labels' => $labels,
				'supports' => array('title')
			);
			// (max. 20 characters, can not contain capital letters or spaces)
			register_post_type( 'webbooker', $args );

		}


	/*
	 * Custom Paths
	 */

		public static function rewrite_slugs() {

			// Establish Slugs
			add_rewrite_tag( '%activity_destination%', '([^&]+)' );
			add_rewrite_tag( '%search_destination%', '([^&]+)' );
			add_rewrite_tag( '%search_category%', '([^&]+)' );
			add_rewrite_tag( '%search_mood%', '([^&]+)' );
			add_rewrite_tag( '%search_tag%', '([^&]+)' );
			add_rewrite_tag( '%activitySlug%', '([^&]+)' );

			// Establish Base Path
			$arezwbSlug = get_post_type_object('webbooker')->rewrite['slug'];

			// Destination
			add_rewrite_rule( $arezwbSlug.'/([^/]+)/destination/([^/]+)/?$',
				'index.php?post_type=webbooker&webbooker=$matches[1]&search_destination=$matches[2]', 'top' );

			// Category
			add_rewrite_rule( $arezwbSlug.'/([^/]+)/category/([^/]+)/?$',
				'index.php?post_type=webbooker&webbooker=$matches[1]&search_category=$matches[2]', 'top' );

			// Mood
			add_rewrite_rule( $arezwbSlug.'/([^/]+)/mood/([^/]+)/?$',
				'index.php?post_type=webbooker&webbooker=$matches[1]&search_mood=$matches[2]', 'top' );

			// Tag
			add_rewrite_rule( $arezwbSlug.'/([^/]+)/tag/([^/]+)/?$',
				'index.php?post_type=webbooker&webbooker=$matches[1]&search_tag=$matches[2]', 'top' );

			// 3 arguments destination, activity
			add_rewrite_rule( $arezwbSlug.'/([^/]+)/([^/]+)/([^/]+)/?$',
				'index.php?post_type=webbooker&webbooker=$matches[1]&activity_destination=$matches[2]&activitySlug=$matches[3]', 'top' );

			// Check
			$rules = get_option( 'rewrite_rules' );
			if ( 
				!isset( $rules[$arezwbSlug.'/([^/]+)/([^/]+)/([^/]+)/?$'] ) ||
				!isset( $rules[$arezwbSlug.'/([^/]+)/tag/([^/]+)/?$'] ) ||
				!isset( $rules[$arezwbSlug.'/([^/]+)/mood/([^/]+)/?$'] ) ||
				!isset( $rules[$arezwbSlug.'/([^/]+)/category/([^/]+)/?$'] ) ||
				!isset( $rules[$arezwbSlug.'/([^/]+)/destination/([^/]+)/?$'] )
			) {
				global $wp_rewrite;
				$wp_rewrite->flush_rules();
			}

			// Set Custom Template
			add_filter('template_include', 'arez_template_include', 1, 1);
				function arez_template_include( $template ) {
					if ( get_query_var( 'post_type' ) == "webbooker" ) {

						if ( get_query_var( 'activity_destination' ) ) {
							include_once( ACTIVITYREZWB_PLUGIN_DIR .'view/php/global.php');

							return  ACTIVITYREZWB_PLUGIN_DIR .'view/php/single-webbooker.php'; // WP Related
						} else {
							return  ACTIVITYREZWB_PLUGIN_DIR .'view/php/_main-webbooker.php'; // WP Related
						}
					}

					return $template;
				}

			// load scripts in the footer
			add_action("wp_footer",array("ActivityRezWB_App","load_global_vars"));
			add_action("wp_footer",array("ActivityRezWB_Shortcode","init_script"));

		}

	// *************************************************************************************************** //
	/*
	 * Populate Global vars 
	*/
		public static function load_global_vars(){
				global $post;
				
				// Call the ActivityRez API
				include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
				// Init API
				$arezApi = ActivityRezAPI::instance();

				if ( get_query_var( 'post_type' ) == "webbooker" ) {

					$activity_destination = get_query_var( 'activity_destination' );

					if ( empty($activity_destination) ) {

						// Get Webbooker script
						wp_register_script( 'ActivityRezWB_Shortcode_webbooker', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/webbooker.js',array(),0,true);
						wp_register_script( 'ActivityRezWB_Shortcode_webbooker_activity', ACTIVITYREZWB_PLUGIN_PATH .'assets/js/app/activity-init.js',array(),0,true);

						// Load scripts
						wp_enqueue_script( 'jquery' );
						wp_enqueue_script( 'jquery-ui-datepicker' );
						wp_enqueue_script( 'ActivityRezWB_Shortcode_webbooker' );
						wp_enqueue_script( 'ActivityRezWB_Shortcode_webbooker_activity' );

					}
				}


				// Authenticate
				$options = get_option( 'arez_options' );
				$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );

				$webBookerID = get_post_meta($post->ID,'webBookerID',true);
				// Get WebBooker
				$wb = $arezApi->getWebBooker($webBookerID);
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
				echo "if(typeof console == 'undefined'){\n";
				echo " window.console = { log: function(){} };\n";
				echo "}\n";
				echo "</script>\n";
		}



	/*
	 * Sorting Functions
	 */

		// Sort by Date Ascending
		function sort_date_asc($date1, $date2) { //dateSortAsc
			if ($date1 > $date2) return 1;
			if ($date1 < $date2) return -1;
			return 0;
		}

		// sorts countries/languages by i18n(RFC 3066) in ascending order.
		public static function sort_country( $co, $i18n, $lang = false ) { //countrySort
			$k = $lang ? 'title' : 'name'; // set array key name

			// avoid no enhanced functions - depends on PHP server
			if( function_exists('collator_create') && function_exists('collator_sort_with_sort_keys') ) {
				$old = array();
				foreach( $co as $c ) {
					$old[] = $c[$k];
				}
				$coll = collator_create( $i18n );
				$ns = collator_sort_with_sort_keys( $coll, $old );

				if( $ns ) {
					$new = array();
					foreach( $old as $o ) {
						foreach( $co as $c ) {
							if( $c[$k] == $o ) {
								$new[] = $c;
							}
						}
					}
					if( !$lang && $i18n == 'ja' ) $new = $this->sort_country_i18n( $new );
					$co = $new;
				}
			}

			if( !$lang ) $co = self::set_country_preference( $co, $i18n );
			return $co;
		}



		// Sorts countries mixed Chinese and Kana characters for Japanese.
		public static function sort_country_i18n( $co ) { // countrySortByJP
			// insert position
			$pos = array( 'PT', 'QA', 'NE', 'SC', 'TH', 'TC', 'TD', 'CF', 'TN', 'BD', 'FM', 'ZA', 'NA', 'RU', 'KH');

			// find 'HK' as the first row of the kanji group
			for( $i = count( $co )- 1; $i >= 0; $i-- ) {
				if( $co[$i]['alpha-2'] == 'HK' ) break;
			}
			$co_kana  = array_slice( $co, 0,  $i); 
			$co_kanji = array_slice( $co, (count( $co ) - $i)*-1 );

			for( $i = 0; $i < count( $co_kanji ); $i++ ) {
				$add[0] = $co_kanji[$i];
				for( $j = 0; $j < count( $co_kana ); $j++ ) {
					if( $co_kana[$j]['alpha-2'] == $pos[$i] ) {
						$a = array_slice( $co_kana, 0, $j+1 );
						$b = array_slice( $co_kana, $j+1 );
						$co_kana = array_merge( $a, array( $co_kanji[$i] ), $b );
						break;
					}
				}
			}
			return $co_kana;
		}


	/*
	 *	Sets top country as a preference.
	 */
		function set_country_preference( $co, $i18n ) { // setTopCountry
			//set the preference
			switch( $i18n ) {
				case 'ja'		: $pr = 'JP'; break;
				case 'in_IN'	: $pr = 'ID'; break;
				case 'vi'		: $pr = 'VN'; break;
				default			: $pr = strtoupper( substr( $i18n, -2 ));
			}

			// pick up the preference position
			for( $i = count( $co )- 1; $i >= 0; $i-- ) {
				if( $co[$i]['alpha-2'] == $pr ) break;
			}

			// change order
			$a  = array_slice( $co, 0,  $i); 
			if( count( $co ) - $i -1 > 0 ) {
				$b  = array_slice( $co, (count( $co ) - $i -1)*-1 );
			} else {
				$b  = array();
			}
			$co = array_merge( array( $co[$i] ), $a, $b);
			
			return $co;
		}


	// *************************************************************************************************** //

}






//Define Short Code and options
add_shortcode( 'arezWebBooker', 'arezWebBookerShortCode' );

/**
* Short Code for the web booker to allow it to be embeded into different pages and have the resellerID's locked
*/
function arezWebBookerShortCode( $atts=null, $content = null ) {
	$options = shortcode_atts(array(
		'reseller1ID'=>'',
		'reseller2ID'=>false,
		'i18N'=>'',
		'activityID'=>false,
	), $atts);

	$r1 = $r2 = '';
	$i18N = '';
	if ( isset( $options['reseller1ID'] ) ) {
		$r1 = (int)$options['reseller1ID'];
	}
	if ( isset( $options['reseller2ID'] ) ) {
		$r2 = (int)$options['reseller2ID'];
	}
	if ( isset( $options['i18N'] ) ) {
		$i18N = $options['i18N'];
	}
	if ( isset( $options['activityID'] ) ) {
		$activityID = $options['activityID'];
	}
}

global $wbCacheFields;
$wbCacheFields = array(
	'header',
	'style',
	'footer',
	'tags',
	'moods',
	'wb_destinations',
	'cats',
	'terms',
	'privacy',
	'hero_url',
	'cancellation',
	'hero_heading_text',
	'hero_summary_text',
	'activity_category',
	'activity_mood',
	'activity_tag',
	'receipt_description',
	'receipt_css',
	'receipt_title',
	'operator_email',
	'operator_name',
	'aboutus',
	'contact',
	'thumbnailHeight',
	'wb_countries',
	'galleryImageHeight'
);






/*


	// *************************************************************************************************** //
	// TODO REFACTOR
	// *************************************************************************************************** //


	//Steal the call to single-webbooker here!
	add_filter( 'template_include', 'arezWBTemplate', 1, 1 );
	function arezWBTemplate( $template ) {
		global $post,$l10n,$wp_query, $query;
		if ( $post->post_type == 'webbooker' ) {
			$single_webbooker = ACTIVITYREZWB_PLUGIN_DIR . '/php/single-webbooker.php';
			return $single_webbooker;
		}
		return $template;
	}

	add_filter( 'wbTemplate', 'includeDefaultWBTemplate', 10, 2 );
	function includeDefaultWBTemplate( $wb_include=false, $wb=false ) {
		if ( !$wb ) {
			return;
		} else if ( $wb_include ) {
			return $wb_include;
		} else {
			return ACTIVITYREZWB_PLUGIN_DIR . '/php/bootstrap.php';
		}
	}



	function arez_get_translationFiles($wbids=array()){
		foreach( $wbids as $wbID){
			$arezApi = ActivityRezAPI::instance();
			$CurlResult = $arezApi->fetchTranslations($wbID);//update translation files
			$tmp_zip = tempnam ("/tmp", 'translations_');
			if($tmp_zip){
				file_put_contents( $tmp_zip,  $CurlResult);
				$base = WP_CONTENT_DIR;
				chdir($base);
				$cmd = 'cd '.$base.' && /usr/bin/unzip '.$tmp_zip;
				exec($cmd);
				unlink($tmp_zip);
			}
		}
	}




	function add_webBooker_to_dropdown( $pages, $r )
	{
		
		if('page_on_front' == $r['name'])
		{
			//die("Get_Pages:".print_r($r,1));
			$args = array(
				'post_type' => 'webBooker',
				'post_parent'=>0,
				'posts_per_page'=>-1,
				'post_status'=>'publish',
				'meta_query' => array(
					array(
						'key' => 'webBookerID'
					)
				)
			);
			$items = get_posts($args);
			$pages = array_merge($pages, $items);
		}

		return $pages;
	}
	add_filter( 'get_pages', 'add_webBooker_to_dropdown',10,2 );



	function enable_front_page_webBooker( $query )
	{
		if(( !isset($query->query_vars['post_type']) || '' == $query->query_vars['post_type'] ) && 0 != $query->query_vars['page_id']){
			$query->query_vars['post_type'] = array( 'page', 'webBooker' );
		}
	}
	add_action( 'pre_get_posts', 'enable_front_page_webBooker' );



*/

/*
 * Design Templates
 */

	// TODO: Add Templates

	function arez_include( $template ){
		global $wb;
		$path = get_template_directory().'/wb/'.$template;
		if( file_exists($path) ){
			include( $path );
		}else{
			include( ACTIVITYREZWB_PLUGIN_DIR . '/view/php/' . $template );
		}
	}




// *************************************************************************************************** //

/*
 * Handle Styles
 */


	// Public Facing Head Section 
	add_action('wp_head', 'ActivityRezWB_site_head');
		function ActivityRezWB_site_head() {
			// Ensure we are NOT in the admin section of wordpress
			if( !is_admin() ) {
				// TODO
			}
		}

	// Add Custom Body Class
	add_filter("body_class", "ActivityRezWB_site_bodyclass");
		function ActivityRezWB_site_bodyclass($classes) {
			// TODO
		}



// *************************************************************************************************** //


/*   Widget Parts */

/*
 * This will turn the travel agent signin into a wordpress style widget that will allow them to place it anywhere in the site they want
 */

 
add_action( 'widgets_init', 'arez_webbooker_widgets_init' );
	function arez_webbooker_widgets_init() {
		register_sidebar( array(
			'name'			=> __( 'Webbooker Sidebar', ACTIVITYREZWB_TEXTDOMAIN ),
			'id'			=> 'webbooker-sidebar',
			'description'	=> __( 'If you prefer to have your sidebar dynamic ', ACTIVITYREZWB_TEXTDOMAIN ),
			'before_widget'	=> '',
			'after_widget'	=> '',
			'before_title'	=> '',
			'after_title'	=> '',
		) );
	}




function arez_travel_agent_login($args) {
	global $wb;
	if(!$wb) return;
	extract($args);
?>
	<?php echo $before_widget; ?>
	<div id="agents-sidebar" class="sidebar-container" data-bind="with: WebBooker.Agent">
		<div class="header gradient-light">
			<h3><?php _e('Travel Agents','arez'); ?></h3>
		</div>
		<div class="cb"></div>
		<div class="ribbonFold"></div>

		<div class="content">
			<div data-bind="visible: user_id() > 0">
				<p><strong><?php _e('Welcome back,','arez'); ?> <span class="agent-name" data-bind="html: name"></span>!</strong></p>
				<div class="actions">
					<a href="<?php echo $wb['wb_url']; ?>/#/Dashboard" class="buttonBlue" data-bind="scrollTopOnClick: true"><i class="icon-list-alt icon-white"></i> <?php _e('Dashboard','arez'); ?></a>
					<button class="buttonGray" data-bind="click: logout"><i class="icon-ban-circle icon-white"></i> <?php _e('Log Out','arez'); ?></button>
				</div>
				<div style="clear:both"></div>
			</div>
			<div data-bind="visible: !user_id() || user_id() == 0">
				<p><strong><?php _e('Travel Agent Log In','arez'); ?></strong></p>
				<p class="login-error"></p>
				<div class="login-form">
				<form>
					<div class="alert alert-success" data-bind="text: loginSuccess, visible: loginSuccess"></div>
					<input type="text" title="<?php _e('Username','arez'); ?>" placeholder="<?php _e('Username','arez'); ?>" autocorrect="off" autocapitalize="off" data-bind="value: email" />
					<input type="password" autocomplete="off" title="<?php _e('Password','arez'); ?>" placeholder="<?php _e('Password','arez'); ?>" data-bind="value: password" />
					<a class="lostPass" href="#/PasswordResetRequest"><?php _e("Forgot Password?",'arez');?></a>
					<div style="clear:both"></div>
					<button type="submit" class="buttonBlue" data-bind="click: login"><i class="icon-lock icon-white" data-bind="css: {'icon-processing': WebBooker.Agent.isLoggingIn}"></i> <?php _e('Log In','arez'); ?></button>
					<button class="buttonGray" data-bind="click: doShowSignup, scrollTopOnClick: true"><i class="icon-pencil icon-white"></i> <?php _e('Sign Up','arez'); ?></button>
					<div class="alert alert-error" data-bind="text: loginError, visible: loginError"></div>
				</form>
				</div><br>
				<p><strong><?php _e('Sign Up','arez'); ?></strong></p><p><?php _e('Take advantage of our proprietary online booking technology and earn commissions.','arez'); ?> <!-- <a href="/booking/travel-agents/"><?php _e('Learn more.','arez'); ?></a> --></p>
			</div>
		</div><!-- /content -->
	</div><!-- agents-sidebar -->
        <?php echo $after_widget; ?>
<?php
}
wp_register_sidebar_widget('arezwb_widget_talogin', 'Travel Agent Login', 'arez_travel_agent_login');


function arez_cart_widget($args) {
	global $wb;
	if(!$wb) return;	
	extract($args);
?>
        <?php echo $before_widget; ?>
	<div id="cart-sidebar" class="sidebar-container" data-bind="with: WebBooker.Cart">
		<div class="header gradient-light">
			<h3><?php _e('My Itinerary','arez'); ?></h3>
		</div>
		<a href="<?php echo (isset($wb['wb_url'])) ? $wb['wb_url'] : ''; ?>/#/Itinerary" title="<?php _e('Retrieve an itinerary from a previous sale.','arez'); ?>" class="buttonBlue retrieve"><i class="icon-briefcase icon-white"></i> <?php _e('Retrieve An Itinerary','arez'); ?></a>
		<div class="cb"></div>
		<div class="ribbonFold"></div>
		<div class="content" style="display: none" data-bind="visible: WebBooker.wbLoaded">
			<div class="empty" data-bind="visible: WebBooker.Cart.items().length < 1">
				<?php _e('You haven\'t added any activities yet.','arez'); ?>
			</div>

			<div data-bind="visible: items().length > 0, foreach: items" style="display:none">
			<div class="activity">
				<button class="buttonGray" title="Remove Activity" data-bind="click: remove"><i class="icon-remove icon-white"></i> <?php _e('Remove','arez'); ?></button>
				<h4><a data-bind="attr: { 'href': url }, html: title"></a></h4>
				<div class="info">
					<strong><?php _e('Location','arez'); ?>:</strong> <span data-bind="text: __(destination)()"></span><br>
					<strong><?php _e('Date','arez'); ?>:</strong> <span data-bind="text: i18n_date()"></span><br>
					<strong><?php _e('Time','arez'); ?>:</strong> <span data-bind="text: time"></span>
				</div>
				<ul class="guests" data-bind="foreach: guests">
					<!-- ko if: qty() > 0 -->
					<li>
						<strong><span data-bind="text: qty"></span> <span data-bind="text: name"></span>:</strong>
						<span data-bind="money: subtotal"></span>
					</li>
					<!-- /ko -->
				</ul>
			</div><!-- /activity -->
			</div><!-- /foreach items -->

			<div class="cart-total clearfix" data-bind="visible: items().length > 1">
				<span><strong><?php _e('Ticket Total','arez'); ?>:</strong></span>
				<span class="price" data-bind="money: subtotal"></span>
			</div>

			<div class="actions">
				<a href="<?php echo (isset($wb['wb_url'])) ? $wb['wb_url'] : ''; ?>/#/Search" title="Search for more activities" class="buttonBlue" data-bind="visible: WebBooker.CheckoutNav.show"><i class="icon-share-alt icon-white"></i> <?php _e('Return to Activities','arez'); ?></a>
				<button title="<?php _e('Customize itinerary and check out','arez'); ?>" class="buttonBlue" data-bind="enable: items().length > 0, click: viewCart, visible: !WebBooker.CheckoutNav.show(), scrollTopOnClick: true"><i class="icon-shopping-cart icon-white"></i> <?php _e('Customize and Check Out','arez'); ?></button>
			</div>
			<div style="clear:both"></div>
		</div><!-- /content -->
	</div><!-- /cart-sidebar -->
        <?php echo $after_widget; ?>
<?php
}
wp_register_sidebar_widget('arezwb_widget_cart', 'Webbooker Cart Widget', 'arez_cart_widget');



function arez_catalog_search_widget($args) {
	global $wb;
	if(!$wb) return
	extract($args);
?>
        <?php echo $before_widget; ?>
	<div id="search-filters" class="sidebar-container" data-bind="with: WebBooker.Catalog">
		<div class="header gradient-light">
			<h3><?php _e('Search Activities','arez'); ?></h3>
		</div>
		<div class="cb"></div>
		<div class="ribbonFold"></div>

		<div class="content">
			<form id="search-activities-form">
				<div id="search-filters-locations" class="box-content collapsible">
					<h4 title="<?php _e('Hide','arez');?>" data-bind="collapseSidebarBox: true"><i class="icon-chevron-up"></i> <?php _e('Location','arez'); ?></h4>
					<div class="collapse-me">
						<select data-bind="options: search_filter_data.destinations, value: search_params.destination, optionsCaption: __('<?php echo __('Choose a Destination','arez') . '...'; ?>'), optionsText: '__name'"></select>
					</div>
				</div><!-- /search-filters-locations -->

				<div id="search-filters-categories" class="box-content collapsible" data-bind="visible: search_filter_data.categories().length || search_filter_data.tags().length">
					<h4 title="<?php _e('Show','arez');?>" data-bind="collapseSidebarBox: true"><i class="icon-chevron-down"></i> <?php _e('Categories and Tags','arez'); ?></h4>
					<div class="collapse-me" style="display: none;">
						<select class="select-category" data-bind="visible: search_filter_data.categories().length, options: search_filter_data.categories, value: search_params.category, optionsCaption: '<?php echo __('Choose a category','arez').'...'; ?>', optionsText: '__name', optionsValue: 'name'"></select>
						<select class="select-tag" data-bind="visible: search_filter_data.tags().length, options: search_filter_data.tags, value: search_params.tag, optionsCaption: '<?php echo __('Choose a tag','arez') . '...'; ?>', optionsText: '__name', optionsValue: 'name'"></select>
					</div>
				</div><!-- /search-filters-categories -->

				<div id="search-filters-moods" class="box-content collapsible" data-bind="visible: search_filter_data.moods().length">
					<h4 title="<?php _e('Show','arez');?>" data-bind="collapseSidebarBox: true"><i class="icon-chevron-down"></i> <?php _e('Moods','arez'); ?></h4>
					<div class="collapse-me" style="display: none;">
						<ul class="moods clearfix" data-bind="foreach: search_filter_data.moods">
							<li><input type="checkbox" name="search-mood" data-bind="checked: selected" /> <span data-bind="text: __name"></span></li>
						</ul>
					</div>
				</div><!-- /search-filters-moods -->

				<div id="search-filters-date" class="box-content collapsible">
					<h4 title="<?php _e('Show','arez');?>" data-bind="collapseSidebarBox: true"><i class="icon-chevron-down"></i> <?php _e('Date','arez'); ?></h4>
					<div class="collapse-me" style="display: none;">
						<div class="pull-left firstDate">
							<label for="datepicker-second"><?php _e('From','arez'); ?></label>
							<input type="text" readonly="true" class="datepicker input-small" name="datepicker-first" id="datepicker-first" data-bind="value: search_params.date_start" />
						</div>
						<div class="pull-left">
							<label for="datepicker-second"><?php _e('To','arez'); ?></label>
							<input type="text" readonly="true" class="datepicker input-small" name="datepicker-second" id="datepicker-second" data-bind="value: search_params.date_end" />
						</div>
						<div style="clear:both"></div>
					</div>
				</div><!-- /search-filters-date -->

				<div id="search-filters-keywords" class="box-content collapsible">
					<h4 title="<?php _e('Hide','arez');?>" data-bind="collapseSidebarBox: true"><i class="icon-chevron-up"></i> <?php _e('Keywords','arez'); ?></h4>
					<div class="collapse-me">
						<input type="text" name="keywords" id="search-keywords" data-bind="value: search_params.keywords, valueUpdate: 'afterkeydown'" />
					</div>
				</div><!-- /search-filters-keywords -->
			</form>
			<div class="actions">
				<button data-bind="click: clearFilters" class="buttonGray buttonBig"><i class="icon-refresh icon-white"></i> <?php _e('Reset Filters','arez'); ?></button>
				<button data-bind="click: loadWithFilters" title="<?php _e('Search Activities','arez'); ?>" id="searchActivitiesButton" class="buttonBlue buttonBig"><i class="icon-search icon-white"></i> <?php _e('Search','arez'); ?></button>
			</div>
			<div style="clear:both"></div>
			<p style="display:block !important;visibility:visible !important;" class="powered">Powered by <a style="display:inline-block !important;visibility:visible !important;" class="arezLogo" href="https://www.activityrez.com/?utm_source=booking+engine&utm_medium=referral&utm_campaign=powered+by" target="_blank">ActivityRez.com</a></p>
		</div><!-- /content -->
	</div><!-- /search-filters -->
        <?php echo $after_widget; ?>
<?php
}
wp_register_sidebar_widget('arezwb_widget_search', 'Webboker Catalog Search', 'arez_catalog_search_widget');

// *********************************************************************************************
