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
echo "<div id=\"arez-main\">\n";
echo "<h1>".$wb["activity"]["title"]."</h1>\n";
echo "<div class=\"arez-media\">";
echo "<h3>Media</h3>";
foreach ($wb["activity"]["media"] as $key) {
	echo "<img src=\"https://media.activityrez.com/media/".$key["name"]."/thumbnail/height/400\" />";
}
echo "</div>\n";
echo "<div class=\"arez-description\">";
echo "<h3>Description</h3>";
echo $wb["activity"]["description"];
echo "</div>\n";
echo "<div class=\"arez-address\">";
echo "<h3>Address</h3>";
echo "<span>".$wb["activity"]["address"]."</span>";
echo "</div>";
echo "<div class=\"arez-instruction\">";
echo "<h3>instructions</h3>";
echo $wb["activity"]["instructions"];
echo "</div>";
//var_dump($wb["activity"]["address_lat"]);
//var_dump($wb["activity"]["address_lng"]);
echo "<div class=\"arez-tags\">";
echo "<h3>Tags</h3>";
echo implode(",",$wb["activity"]["tags"]);
echo "</div>";

echo "</div>\n";
ActivityRezWB_Common::footer();