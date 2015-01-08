<?php 
  global $wpdb;
  $arez_options_arr = get_option('arez_options');
		$api_key = isset($arez_options_arr["api_key"])?$arez_options_arr["api_key"]:"";
?>
<div class="wrap">
<h2>Settings</h2>

<form method="post" action="options.php">
<?php 
	// Get Posted Values
	$options = get_option( 'arez_options' );
		echo "<br />Is Authorized?". $options['authorized'];
		echo "<br />User: ". $options['username'];
		echo "<br />Pass: ". $options['password'];
		echo "<br />API Key". $options['api_key'];
?>
<table class="form-table">
	<tbody>
		<tr>
			<th scope="row"><label for="arez-apikey">API Key</label></th>
			<td><input name="arez_options[api_key]" type="text" id="api-key" value="<?php echo $api_key;?>" class="regular-text"></td>
		</tr>
		<tr>
			<p class="description">
			Get your API access at <a href="https://www.activityrez.com" target="_blank">https://www.activityrez.com</a>
			</p>
			</td>
		</tr>
	</tbody>
</table>

<p class="submit">
<input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes"></p>
</form>

</div>

<?php 
	// Attempt to download web bookers
	$webbookers_temp = get_option( 'arez_webbooker_import' );
	if ( !empty($webbookers_temp) ) {
		echo "<h1>Temp Web Booker Data</h1>";
		print_r($webbookers_temp);
		echo "<a href='?page=arez-settings&action=purgetempdata'>Purge Temp Data</a>";
	}
	if ($_GET["action"] == 'purgetempdata') {
		delete_option('arez_webbooker_import');
	}

?>