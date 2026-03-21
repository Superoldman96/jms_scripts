// ピンクビーン
// 転職サポート

var jobchange_map = Array(
	// 1次転職
	102000003,
	101000003,
	100000201,
	103000003,
	120000101,
	// 2次転職
	102020300,
	101020000,
	106010000,
	102040000,
	120000101, // 2次転職もカイリン
	// 3次転職
	211000001,
	211040401,
	105070001,
	100040106,
	105040305,
	107000402,
	105070200,
	// 4次転職
	240010501,
	221022000,
	240020401,
	240020101,
	910000000
);

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "転職マップへ移動\r\n";
				for (var i = 0; i < jobchange_map.length; i++) {
					text += "#L" + jobchange_map[i] + "##r#m" + jobchange_map[i] + "##k#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				cm.warp(mapid);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
