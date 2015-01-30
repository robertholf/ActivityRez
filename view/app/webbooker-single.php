<?php
/**
 * Web Booking Engine - Single View
 */


ActivityRezWB_Common::header();

echo "<div class=\"arez arez-activity\">\n";
echo "	<h1>".$wb["activity"]["title"]."</h1>\n";

	/*
	 * Media
	 */

		echo "<div class=\"arez-media\">";
				foreach ($wb["activity"]["media"] as $key) {
					echo "<img src=\"https://media.activityrez.com/media/".$key["hash"]."/thumbnail/width/600\" />";
				}
		echo "</div>\n";

	/*
	 * Description
	 */

		echo "<div class=\"arez-description\">";
		echo "<h3>Description</h3>";
		echo $wb["activity"]["description"];
		echo "</div>\n";

	/*
	 * Book Now
	 */

		echo "<div class=\"arez-booking\">";
		echo "<a href=\"". $url ."\">Check Availability</a>";
		echo "</div>\n";

	/*
	 * Address
	 */

		echo "<div class=\"arez-address\">";
		echo "<h3>Address</h3>";
		echo "<span>".$wb["activity"]["address"]."</span>";
		echo "</div>";
		//var_dump($wb["activity"]["address_lat"]);
		//var_dump($wb["activity"]["address_lng"]);

	/*
	 * Instructions
	 */

		echo "<div class=\"arez-instruction\">";
		echo "<h3>instructions</h3>";
		echo $wb["activity"]["instructions"];
		echo "</div>";

	/*
	 * Tags
	 */

		echo "<div class=\"arez-tags\">";
		echo "<h3>Tags</h3>";
		echo implode(",",$wb["activity"]["tags"]);
		echo "</div>";


	echo "</div>\n";

ActivityRezWB_Common::footer();