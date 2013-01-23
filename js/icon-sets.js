var ICONS = {
	'bootstrap': {
		name: 'Core Bootstrap icons',
		url: 'http://twitter.github.com/bootstrap/base-css.html#icons',
		icons: {
			'icon-glass': {
				tags: 'glass drink cocktail'},
			'icon-music': {
				tags: 'music note'},
			'icon-search': {
				tags: 'search find magnify zoom'},
			'icon-envelope': {
				tags: 'envelope mail email letter'},
			'icon-heart': {
				tags: 'heart love favourite'},
			'icon-star': {
				tags: 'star favourite'},
			'icon-star-empty': {
				tags: 'star-empty star favourite'},
			'icon-user': {
				tags: 'user person head'},
			'icon-film': {
				tags: 'film movie show cinema video'},
			'icon-th-large': {
				tags: 'th th-large large blocks square move grid thumbnails'},
			'icon-th': {
				tags: 'th blocks square move grid thumbnails'},
			'icon-th-list': {
				tags: 'th th-list list items ul'},
			'icon-ok': {
				tags: 'ok accept tick mark'},
			'icon-remove': {
				tags: 'remove close cross x'},
			'icon-zoom-in': {
				tags: 'zoom-in zoom in magnify'},
			'icon-zoom-out': {
				tags: 'zoom-out zoom out magnify'},
			'icon-off': {
				tags: 'off power on start stop'},
			'icon-signal': {
				tags: 'signal wifi radio mobile strength'},
			'icon-cog': {
				tags: 'cog settings gear'},
			'icon-trash': {
				tags: 'trash bin rubbish can'},
			'icon-home': {
				tags: 'home house'},
			'icon-file': {
				tags: 'file document'},
			'icon-time': {
				tags: 'time clock watch timer'},
			'icon-road': {
				tags: 'road street'},
			'icon-download-alt': {
				tags: 'download-alt download save store'},
			'icon-download': {
				tags: 'download save store arrow down circle'},
			'icon-upload': {
				tags: 'upload save store arrow up circle'},
			'icon-inbox': {
				tags: 'inbox mail incoming box'},
			'icon-play-circle': {
				tags: 'play-circle play circle media control'},
			'icon-repeat': {
				tags: 'repeat media control refresh reload'},
			'icon-refresh': {
				tags: 'refresh repeat media reload'},
			'icon-list-alt': {
				tags: 'list-alt list table data'},
			'icon-lock': {
				tags: 'lock secure padlock ssl'},
			'icon-flag': {
				tags: 'flag country'},
			'icon-headphones': {
				tags: 'headphones media music sound'},
			'icon-volume-off': {
				tags: 'volume-off volume sound mute'},
			'icon-volume-down': {
				tags: 'volume-down volume sound down quiet'},
			'icon-volume-up': {
				tags: 'volume-up volume sound up loud'},
			'icon-qrcode': {
				tags: 'qrcode block grid oh-god-why code scan'},
			'icon-barcode': {
				tags: 'barcode block grid code scan'},
			'icon-tag': {
				tags: 'tag label'},
			'icon-tags': {
				tags: 'tags labels tag label'},
			'icon-book': {
				tags: 'book library read'},
			'icon-bookmark': {
				tags: 'bookmark save favourite'},
			'icon-print': {
				tags: 'print printer'},
			'icon-camera': {
				tags: 'camera photo picture gallery'},
			'icon-font': {
				tags: 'font text letter wysiwyg'},
			'icon-bold': {
				tags: 'bold text letter wysiwyg'},
			'icon-italic': {
				tags: 'italic text letter wysiwyg'},
			'icon-text-height': {
				tags: 'text-height text height letter wysiwyg'},
			'icon-text-width': {
				tags: 'text-width text width letter wysiwyg'},
			'icon-align-left': {
				tags: 'align-left text align left wysiwyg'},
			'icon-align-center': {
				tags: 'align-center text align center centre wysiwyg'},
			'icon-align-right': {
				tags: 'align-right text align right wysiwyg'},
			'icon-align-justify': {
				tags: 'align-justify text align justify wysiwyg'},
			'icon-list': {
				tags: 'list ul items'},
			'icon-indent-left': {
				tags: 'indent-left indent left wysiwyg'},
			'icon-indent-right': {
				tags: 'indent-right indent right wysiwyg'},
			'icon-facetime-video': {
				tags: 'facetime-video facetime video camera film movie'},
			'icon-picture': {
				tags: 'picture image gallery photo art'},
			'icon-pencil': {
				tags: 'pencil edit write change modify'},
			'icon-map-marker': {
				tags: 'map-marker map marker placemark place location'},
			'icon-adjust': {
				tags: 'adjust contrast black white circle'},
			'icon-tint': {
				tags: 'tint ink water drop'},
			'icon-edit': {
				tags: 'edit change modify write pencil box'},
			'icon-share': {
				tags: 'share box arrow out export'},
			'icon-check': {
				tags: 'check tick box checkbox mark ok'},
			'icon-move': {
				tags: 'move arrow four resize'},
			'icon-step-backward': {
				tags: 'step-backward backwards arrow control media back start'},
			'icon-fast-backward': {
				tags: 'fast-backward rewind backwards arrow control media back'},
			'icon-backward': {
				tags: 'backward rewind arrow control media back'},
			'icon-play': {
				tags: 'play media control arrow'},
			'icon-pause': {
				tags: 'pause media control'},
			'icon-stop': {
				tags: 'stop media control'},
			'icon-forward': {
				tags: 'forward arrow control media'},
			'icon-fast-forward': {
				tags: 'fast-forward forward arrow control media'},
			'icon-step-forward': {
				tags: 'step-forward forward arrow control media end'},
			'icon-eject': {
				tags: 'eject media control'},
			'icon-chevron-left': {
				tags: 'chevron-left arrow left chevron'},
			'icon-chevron-right': {
				tags: 'chevron-right arrow right chevron'},
			'icon-plus-sign': {
				tags: 'plus-sign plus sign math add circle'},
			'icon-minus-sign': {
				tags: 'minus-sign plus sign math remove circle'},
			'icon-remove-sign': {
				tags: 'remove-sign remove sign circle cross x close'},
			'icon-ok-sign': {
				tags: 'ok-sign tick mark ok sign circle alert'},
			'icon-question-sign': {
				tags: 'question-sign question sign circle alert'},
			'icon-info-sign': {
				tags: 'info-sign info sign circle information alert'},
			'icon-screenshot': {
				tags: 'screenshot crosshair target location here marker placemark location'},
			'icon-remove-circle': {
				tags: 'remove-circle remove cross x close circle'},
			'icon-ok-circle': {
				tags: 'ok-circle tick check mark ok circle'},
			'icon-ban-circle': {
				tags: 'ban-circle ban circle cancel'},
			'icon-arrow-left': {
				tags: 'arrow-left arrow left'},
			'icon-arrow-right': {
				tags: 'arrow-right arrow right'},
			'icon-arrow-up': {
				tags: 'arrow-up arrow up'},
			'icon-arrow-down': {
				tags: 'arrow-down arrow down'},
			'icon-share-alt': {
				tags: 'share-alt share export arrow out right'},
			'icon-resize-full': {
				tags: 'resize-full resize out full large'},
			'icon-resize-small': {
				tags: 'resize-small resize in small'},
			'icon-plus': {
				tags: 'plus math add'},
			'icon-minus': {
				tags: 'minus math remove'},
			'icon-asterisk': {
				tags: 'asterisk star new note'},
			'icon-exclamation-sign': {
				tags: 'exclamation-sign sign exclamation circle'},
			'icon-gift': {
				tags: 'gift present'},
			'icon-leaf': {
				tags: 'leaf tree plant nature'},
			'icon-fire': {
				tags: 'fire nature'},
			'icon-eye-open': {
				tags: 'eye-open visible show shown see eye'},
			'icon-eye-close': {
				tags: 'eye-close invisible hide hidden see eye'},
			'icon-warning-sign': {
				tags: 'warning-sign warning exclamation isgn'},
			'icon-plane': {
				tags: 'plane airport fly airplane'},
			'icon-calendar': {
				tags: 'calendar year month plan event'},
			'icon-random': {
				tags: 'random shuffle arrow right swap'},
			'icon-comment': {
				tags: 'comment speak quote say speach bubble'},
			'icon-magnet': {
				tags: 'magnet horseshoe torrent link'},
			'icon-chevron-up': {
				tags: 'chevron-up chevron arrow up'},
			'icon-chevron-down': {
				tags: 'chevron-down chevron arrow down'},
			'icon-retweet': {
				tags: 'retweet repeat cycle'},
			'icon-shopping-cart': {
				tags: 'shopping-cart shop cart shopping items'},
			'icon-folder-close': {
				tags: 'folder-close folder close closed directory'},
			'icon-folder-open': {
				tags: 'folder-open folder open opened directory'},
			'icon-resize-vertical': {
				tags: 'resize-vertical resize vertical north south arrow up down'},
			'icon-resize-horizontal': {
				tags: 'resize-horizontal resize horizontal east west arrow left right'},
			'icon-hdd': {
				tags: 'hdd hard disk drive download save media store'},
			'icon-bullhorn': {
				tags: 'bullhorn loudspeaker audio sound media yell announce'},
			'icon-bell': {
				tags: 'bell time clock alarm'},
			'icon-certificate': {
				tags: 'certificate circle star new stamp'},
			'icon-thumbs-up': {
				tags: 'thumbs-up thumb hand up like'},
			'icon-thumbs-down': {
				tags: 'thumbs-down thumb hand down like'},
			'icon-hand-right': {
				tags: 'hand-right hand point right arrow'},
			'icon-hand-left': {
				tags: 'hand-left hand point left arrow'},
			'icon-hand-up': {
				tags: 'hand-up hand point up arrow'},
			'icon-hand-down': {
				tags: 'hand-down hand point down arrow'},
			'icon-circle-arrow-right': {
				tags: 'circle-arrow-right circle arrow right sign'},
			'icon-circle-arrow-left': {
				tags: 'circle-arrow-left circle arrow left sign'},
			'icon-circle-arrow-up': {
				tags: 'circle-arrow-up circle arrow up sign'},
			'icon-circle-arrow-down': {
				tags: 'circle-arrow-down circle arrow down sign'},
			'icon-globe': {
				tags: 'globe world earth america murica west'},
			'icon-wrench': {
				tags: 'wrench settings tools spanner'},
			'icon-tasks': {
				tags: 'tasks progress list items'},
			'icon-filter': {
				tags: 'filter search funnel'},
			'icon-briefcase': {
				tags: 'briefcase bag tote business'},
			'icon-fullscreen': {
				tags: 'fullscreen full screen expand'}
		}
	}
};
