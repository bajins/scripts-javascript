/*
 * @Author: your name
 * @Date: 2021-10-20 16:06:12
 * @LastEditTime: 2021-10-20 21:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript_learning\loading\js\index.js
 */

window.onload = function () {
    var lists = document.getElementsByClassName('list')[0].children;
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var flag = 0;
    var load;
    for (var i = 0; i < 3; i++) {
        lists[i].index = i
        lists[i].onclick = function () {
            if (flag == 1) {
                load.hide();
                flag = 0;
            }
            load = new Loading({
                type: this.index + 1,
                tipLabel: this.innerHTML,
                wrap: wrapper
            });
            load.init();
            flag = 1;
        }
    }
    lists[3].onclick = function () {
        load.hide();
        flag = 0;
    }

    var lists = document.getElementsByClassName('list')[1].children;
    for (li of lists) {
        if (li.innerHTML == "hide") {
            li.onclick = function () {
                for (l of lists) {
                    var cls = document.getElementsByClassName(l.innerHTML)[0];
                    cls.style.display = 'none';
                }
            }
            continue;
        }
        li.onclick = function () {
            for (l of lists) {
                if (l.innerHTML != this.innerHTML) {
                    var cls = document.getElementsByClassName(l.innerHTML)[0];
                    try {
                        cls.style.display = "none";
                    } catch (error) {

                    }
                }
            }
            var cls = document.getElementsByClassName(this.innerHTML)[0];
            cls.style.display = 'block';
        }
    }
}