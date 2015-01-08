<?php

/*
 * Fetch and cache all weboker data
 */


	function remoteAuth(){
		global $flashError;
		$options = get_option( 'arez_options' );

		include_once(ACTIVITYREZWB_PLUGIN_DIR . '/php/lib/arez.api.php');
		$arezApi = ActivityRezAPI::instance();
		$resp = $arezApi->r_authArez( $options['username'], $options['password'] );
		if($resp['status']==0){
			$flashError = __("Invalid Username or Password, Try again",'arez');
		}
	}


	function arez_update_webbookers( $webbookerID = null){
		$webbookers = get_posts( array( 'post_type'=>'webBooker', 'numberposts'=>-1 ) );
		//get into main server
		$options = get_option( 'arez_options' );
		$arezApi = ActivityRezAPI::instance();
		$resp = $arezApi->r_authArez( $options['username'], $options['password'] );
		
		//cache values
		global $wbCacheFields;
		$msg = '';
		if( !empty($webbookers) && is_array($webbookers)){
			$wbs = array();
			foreach( $webbookers as $wb ){
				$wbID = get_post_meta($wb->ID,'webBookerID',true);
				if( !is_null($webbookerID)){//update a specific webbooker
					if( $wbID != $webbookerID) continue;
				}
				
				$wbs[] = $wbID;
				$CurlResult = $arezApi->getWebBooker($wbID);//cache wb data
				$msg .= sprintf(__("Refreshing Server Settings for %s \n<br>",'arez'),$wb->post_title);
				foreach( $wbCacheFields as $field ){
					if(isset($CurlResult['data'][$field])){
						update_post_meta($wb->ID,$field,$CurlResult['data'][$field]);
					}
				}
			}
			arez_get_translationFiles($wbs);//update po files
		}
		return $msg;
	}

