<?php

/*
 * ActivityRezWB_Common Class
 *
 * Common Helpers
 */

class ActivityRezWB_Common {



	/*
	 * Determine if refering agent is robot or human
	 */

		public static function bot_detected() {
			if (isset($_SERVER['HTTP_USER_AGENT']) && preg_match('/bot|crawl|slurp|spider/i', $_SERVER['HTTP_USER_AGENT'])) {
				return true;
			}
			return false;
		}


	/*
	 * Get WordPress Template Header
	 */
		public static function header() {

			// Call WordPress Header
			get_header();
			get_sidebar();
			echo "<div id=\"primary\" class=\"site-content\">\n";
			echo "  <div id=\"content\" role=\"main\">\n";

		}


	/*
	 * Get WordPress Template Footer
	 */
		public static function footer() {

			echo "  </div><!-- #content -->\n";
			echo "</div><!-- #primary -->\n";

			// Call WordPress footer
			get_footer();

		}


}