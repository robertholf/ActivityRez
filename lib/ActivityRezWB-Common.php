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

		public function bot_detected() {
			if (isset($_SERVER['HTTP_USER_AGENT']) && preg_match('/bot|crawl|slurp|spider/i', $_SERVER['HTTP_USER_AGENT'])) {
				return true;
			}
			return false;
		}

}