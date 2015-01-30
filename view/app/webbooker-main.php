<?php
/**
 * Web Booking Engine - Main View
 */

global $wb;
$wb['wb_url'] = get_bloginfo("url");

echo ActivityRezWB_Common::header();

	// Call the ActivityRez API
	include_once( ACTIVITYREZWB_PLUGIN_DIR .'lib/ActivityRezAPI.php');
	$arezApi = ActivityRezAPI::instance();

	// Authenticate
	$options = get_option( 'arez_options' );
	$resp = $arezApi->auth_nonce( $options['username'], $options['password'] );
	echo "<hr />Get Activities";
	var_dump($arezApi->GetActivities());

echo ActivityRezWB_Common::footer(); ?>