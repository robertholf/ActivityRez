<?php
/**
 * Template Name: Web Booking Engine
 *
 * Optimized version of the Web Booking Engine.
 *
 * @package ActivityRez
 * @subpackage Web Booking Engine
 * @author Ryan Freeman <ryan@stoked-industries.com>
 */
global $wb;
ActivityRezWB_Common::header();
echo "------Title------<br/>";
var_dump($wb["activity"]["title"]);
echo "<br/>---Description-------------";
var_dump($wb["activity"]["description"]);
echo "<br/>---Short Description-------------";
var_dump($wb["activity"]["shortDesc"]);
echo "<br/>---Media-------------";
var_dump($wb["activity"]["media"]);
echo "<br/>---Address-------------";
var_dump($wb["activity"]["address"]);
var_dump($wb["activity"]["address_lat"]);
var_dump($wb["activity"]["address_lng"]);
echo "<br/>---Instructions-------------";
var_dump($wb["activity"]["instructions"]);
echo "<br/>---Tags-------------";
var_dump($wb["activity"]["tags"]);

//var_dump($wb);
ActivityRezWB_Common::footer();