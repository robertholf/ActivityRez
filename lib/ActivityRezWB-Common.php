<?php

// *************************************************************************************************** //
// Common Resource
// *************************************************************************************************** //



/**
 *	function that sorts countries/languages by i18n(RFC 3066) in ascending order.
 */
function countrySort( $co, $i18n, $lang = false ) {
	$k = $lang ? 'title' : 'name';	// set array key name
	
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
			if( !$lang && $i18n == 'ja' )	$new = countrySortByJP( $new );
			$co = $new;
		}
	}
	
	if( !$lang ) $co = setTopCountry( $co, $i18n );
	return $co;
}





/**
 *	function that sorts countries mixed Chinese and Kana characters for Japanese.
 */
function countrySortByJP( $co ) {
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

 
/**
 *	function that sets top country as a preference.
 */
function setTopCountry( $co, $i18n ) {
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






