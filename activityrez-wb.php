<?php
/*
Plugin Name: ActivityRez Wordpress Web Booker Plugin
Plugin URI: http://www.activityrez.com/features/booking-engine/
Description: ActivityRez plugin to show your ActivityRez booking engine on your site
Author: ActivityRez LLC
Author URI: http://ActivityRez.com/
Version: 3.0
*/
$ACTIVITYREZWB_VERSION = "3.0";
/*
License: CF Commercial-to-GPL License
Copyright 2013-2015 ActivityRez LLC
This License is a legal agreement between You and the Developer for the use of the Software. 
By installing, copying, or otherwise using the Software, You agree to be bound by the terms of this License. 
If You do not agree to the terms of this License, do not install or use the Software.
*/

// *************************************************************************************************** //

	// Start Session
	if (!session_id()) session_start();


/*
 * Security
 */

	// Avoid direct calls to this file, because now WP core and framework has been used
	if ( !function_exists('add_action') ) {
		header('Status: 403 Forbidden');
		header('HTTP/1.1 403 Forbidden');
		exit();
	}

// *************************************************************************************************** //

/*
 * Declare Global Constants
 */

	// Version
	define( 'ACTIVITYREZWB_VERSION', $ACTIVITYREZWB_VERSION ); // e.g. 3.0

	// WordPress Version
	if (!defined('ACTIVITYREZWB_VERSION_WP_MIN'))
	define( 'ACTIVITYREZWB_VERSION_WP_MIN', '3.2' );

	// Paths TODO:
	if (!defined('ACTIVITYREZWB_PLUGIN_PATH'))
		define( 'ACTIVITYREZWB_PLUGIN_PATH', plugin_dir_url(__FILE__) );

	if (!defined('ACTIVITYREZWB_PLUGIN_DIR'))
		define( 'ACTIVITYREZWB_PLUGIN_DIR', plugin_dir_path(__FILE__) );

	// Paths
	if (!defined('ACTIVITYREZWB_THEME_DIR'))
		define('ACTIVITYREZWB_THEME_DIR', ABSPATH . 'wp-content/themes/' . get_template());

	if (!defined('ACTIVITYREZWB_PLUGIN_NAME'))
		define('ACTIVITYREZWB_PLUGIN_NAME', trim(dirname(plugin_basename(__FILE__)), '/'));

	if (!defined('ACTIVITYREZWB_PLUGIN_DIR'))
		define('ACTIVITYREZWB_PLUGIN_DIR', WP_PLUGIN_DIR . '/' . ACTIVITYREZWB_PLUGIN_NAME);

	if (!defined('ACTIVITYREZWB_PLUGIN_URL'))
		define('ACTIVITYREZWB_PLUGIN_URL', WP_PLUGIN_URL . '/' . ACTIVITYREZWB_PLUGIN_NAME);

	// Define Text Domain
	if (!defined('ACTIVITYREZWB_TEXTDOMAIN'))
		define( 'ACTIVITYREZWB_TEXTDOMAIN', ACTIVITYREZWB_PLUGIN_NAME );

	// Define Destinations
	if (!defined('ACTIVITYREZWB_REMOTE'))
		define( 'ACTIVITYREZWB_REMOTE', true );  // Let's just assume that we are remote shall we?

	if (!defined('AREZ_SERVER'))
		define( 'AREZ_SERVER', 'https://secure.activityrez.com' );

	if (!defined('AREZ_SERVER_TRAINING'))
		define( 'AREZ_SERVER_TRAINING', 'https://training.activityrez.com' );


// *************************************************************************************************** //

/*
 * Initialize
 */

	// Call Classes
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezWB-Init.php'); // WP Related
		add_action( 'init', array('ActivityRezWB_Init', 'init') ); // Menu/Internationalization etc.

	// Common Functions
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezWB-Common.php');

	// API & Data Specific
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezWB-Data.php');
		add_action('webbooker_update_check', 'webbooker_update'); // Refresh Data

	// Admin Specific
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezWB-Admin.php');
		add_action( 'init', array('ActivityRezWB_Admin', 'init') ); // Menu/Internationalization etc.

	// App Specific
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezWB-App.php');
		add_action( 'init', array('ActivityRezWB_App', 'post_type'), 0, 1 ); // Define Post Type
		add_action( 'init', array('ActivityRezWB_App', 'rewrite_slugs'), 0, 1 ); // Define Paths


/*
 * Hooks
 */

	// Activate Plugin
	register_activation_hook(__FILE__, array('ActivityRezWB_Init', 'activation'));

	// Deactivate Plugin
	register_deactivation_hook(__FILE__, array('ActivityRezWB_Init', 'deactivation'));

	// Uninstall Plugin
	register_uninstall_hook(__FILE__, array('ActivityRezWB_Init', 'uninstall'));



// *************************************************************************************************** //

/*
 * Diagnostics
 */

	// Check Permalinks
	add_action('admin_notices', array('ActivityRezWB_Init', 'setup_check') );
	add_action('admin_notices', array('ActivityRezWB_Init', 'permalinks_check') );
