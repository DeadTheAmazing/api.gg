const request = require('request'),
    { firefox, chromium } = require('playwright');


// ---
// ---
// ---
// ---  
exports.signup = (name) => {

    var options = {
        'method': 'POST',
        'url': 'https://auth.branchbeta.com/api/signup',
        'headers': {
            'Content-Type': 'text/plain',
        },
        body: `{"full_name":"${name}"}`
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) reject(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}

// ---
// ---
// ---
// ---
exports.fetchData = (token) => {
    if (!token) throw new Error("missing token");
    var options = {
        'method': 'GET',
        'url': 'https://api.branchbeta.com/me?show_detail=1',
        'headers': {
            'Authorization': `Bearer ${token}`,
            'accept': 'application/json, text/plain, */*',
            'withcredentials': 'true'
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}




exports.fetchUserData = (token, id) => {
    const options = {
        method: 'GET',
        url: 'https://api.branchbeta.com/users',
        qs: { user_ids: id },
        headers: {
            authorization: `Bearer ${token}`
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body)["data"][id]);
            });
        })
    )
}




exports.fetchOwnedCosmetics = (token, id) => {
    if (!token || !id) throw new Error("missing token/id");
    const options = {
        method: 'GET',
        url: 'https://api.branchbeta.com/cosmetics/user',
        qs: { user_id: id },
        headers: {
            authorization: `Bearer ${token}`
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body)["cosmetics"]);
            });
        })
    )
}





exports.fetchUserCosmetics = (token, id) => {
    const options = {
        method: 'GET',
        url: 'https://api.branchbeta.com/cosmetics/user',
        qs: { user_id: id, equipped: '1' },
        headers: {
            authorization: `Bearer ${token}`
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body)["cosmetics"]);
            });
        })
    )

}

// ---
// ---
// ---
// ---
exports.refreshGameSession = (token, id) => {
    if (!token) throw new Error("missing token");
    var options = {
        'method': 'GET',
        'url': `https://api.branchbeta.com/v1/forest/session_renew/private/${id}`,
        'headers': {
            'authorization': `Bearer ${token}`,
            'withcredentials': 'true',
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}

// ---
// ---
// ---
// ---
exports.joinBranch = (token, id) => {
    if (!token) throw new Error("missing token");
    var options = {
        'method': 'GET',
        'url': `https://api.branchbeta.com/organization/${id}`,
        'headers': {
            'authorization': `Bearer ${token}`,
            'withcredentials': 'true',
        }
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}




exports.equipCosmetic = (token, cid) => {
    const options = {
        method: 'PATCH',
        url: 'https://api.branchbeta.com/cosmetics/user',
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: { cosmetic_id: cid, equip: 1 },
        json: true
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(response.body);
            });
        })
    )
}

exports.unequipCosmetic = (token, cid) => {
    const options = {
        method: 'PATCH',
        url: 'https://api.branchbeta.com/cosmetics/user',
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: { cosmetic_id: cid, equip: 0 },
        json: true
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve();
            });
        })
    )
}




exports.purchaseCosmetic = (token, cid) => {
    const options = {
        method: 'POST',
        url: 'https://api.branchbeta.com/cosmetics/user/purchase',
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: { cosmetic_id: 410, currency: 'acorns' },
        json: true
    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(response.body);
            });
        })
    )
}

// ---
// ---
// ---
// ---
exports.giveAcorns = (token, acorns, userId) => {
    if (!token) throw new Error("missing token");
    var options = {
        'method': 'POST',
        'url': 'https://api.branchbeta.com/currency/acorns/transfer',
        'headers': {
            'authorization': `Bearer ${token}`,
            'content-type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'withcredentials': 'true'
        },
        body: JSON.stringify({
            "organization_id": 2,
            "receiver_id": userId,
            "amount": acorns
        })

    };
    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}
// ---
// ---
// ---
// ---

exports.updateStatus = (token, status) => {
    const options = {
        'method': 'PATCH',
        'url': 'https://api.branchbeta.com/me/status',
        'headers': {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'content-type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'withcredentials': 'true'
        },
        body: JSON.stringify({ text_status: status, clear_text_status: false })
    };

    return (
        new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
                resolve(JSON.parse(response.body));
            });
        })
    )
}
exports.init = function (token, branch) {
    (async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        console.log("new page")
        await context.addCookies([{
            name: "session",
            value: token,
            url: "https://app.branchbeta.com"
        }]);
        console.log("cookies added")
        await page.goto(`https://app.branchbeta.com/branch/${branch}`);
        console.log(`logging into ${branch}`)
        await page.screenshot({ path: 'screenshot.png' });
        await page.waitForSelector('.qinYV');
        await page.click('.qinYV');
        console.log(`Joining ${branch} now`)
        await page.evaluate(() => {
            function move(x, y) {
                var body = __BRANCH__.engine.worldManager.entityManager.getPlayer();
                body.x = body.x + x;
                body.y = body.y + y;
                body.tryMove();
            }
            move(0, 80);
            return page;
        });
    })();

}