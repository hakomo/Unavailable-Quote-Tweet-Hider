// ==UserScript==
// @name         Unavailable Quote Tweet Hider
// @homepage     https://github.com/hakomo/Unavailable-Quote-Tweet-Hider
// @version      1.0
// @author       hakomo
// @match        https://twitter.com/*
// ==/UserScript==

(function() {
    'use strict';
    const e = document.getElementById('stream-items-id');
    if (e === null) return;
    function filter(node) {
        return node.getElementsByClassName('Tombstone').length === 0;
    }
    for (const node of e.children) {
        if (!filter(node)) {
            node.parentNode.removeChild(node);
        }
    }
    const observer = new MutationObserver(function(records) {
        for (const record of records) {
            for (const node of record.addedNodes) {
                if (!filter(node)) {
                    node.parentNode.removeChild(node);
                }
            }
        }
    });
    observer.observe(e, { childList: true });
})();
