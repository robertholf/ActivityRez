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

		
		}
	/*
	 * Get WordPress Template Footer
	 */
		public static function footer() {

			// Call WordPress footer
			get_footer();

		
		}


}