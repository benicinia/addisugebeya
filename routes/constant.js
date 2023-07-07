exports.root_url = "http://ezapay.com";
//exports.min_vanity_length = 4;
//exports.num_of_urls_per_hour = 50;


exports.CT = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };

exports.update_views_query = 'UPDATE urls SET num_of_clicks = {VIEWS} WHERE id = {ID}';
exports.insert_view = 'INSERT INTO stats SET ip = {IP}, url_id = {URL_ID}, referer = {REFERER}';
exports.check_ip_query = 'SELECT COUNT(id) as counted FROM urls WHERE datetime_added >= now() - INTERVAL 1 HOUR AND ip = {IP}';

exports.host = 'localhost';
exports.user = 'root';
exports.password = '';
exports.database = 'netx';