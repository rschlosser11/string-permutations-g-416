function findAllPermutations(str) {
    let perms = [];
    if (str.length < 2) {
      return [str];
    } else {
      for (let i = 0; i < str.length; i++) {
        let lessStr = str.substring(0, i) + str.substring(i + 1, str.length)
        let toAdd = '';
        while (lessStr.length !== 0) {
            perms.push(`${str[i]}${lessStr}${toAdd}`);
            toAdd += lessStr[0]
            lessStr = lessStr.substring(1);
        }
    }
    return perms
    }
}

// abc, acb, bac, bca, cab, cba//