// JSON Arrays of Hang Seng Index
var index = [{ '1': ["請選擇", ""] }, { '2': ["01299", "友邦保險"] }, { '3': ["00005", "滙豐控股"] }, { '4': ["00939", "建設銀行"] }];

var $select = $('#vote');
$.each(index, function (i, val) {
    $select.append($('<option />', { value: (i + 1), text: val[i + 1][0] + " : " + val[i + 1][1] }));
});

// Validation
function validateForm() {
    var valid = true
    var name = document.forms["favorite_index"]["name"].value;
    var age = document.forms["favorite_index"]["age"].value;
    var hkid = document.forms["favorite_index"]["hkid"].value;
    var contact = document.forms["favorite_index"]["contact"].value;
    var vote = document.forms["favorite_index"]["vote"].value;

    num_reg = /^[0-9]+$/;
    letter_reg = /^[ A-Za-z\u3000\u3400-\u4DBF\u4E00-\u9FFF]{0,9}$/

    if (name == "" || !letter_reg.test(name) || name.length > 30) {
        document.getElementById("name_err").style.visibility = "visible";
        document.getElementById("name_err").innerHTML = '請輸入有效的姓名';
        document.forms["favorite_index"]["name"].focus();
        valid = false;
    } else {
        document.getElementById("name_err").style.visibility = "hidden";
    }

    if (!num_reg.test(age) || age.length > 3 || age < 18 || age > 110) {
        document.getElementById("age_err").style.visibility = "visible";
        document.getElementById("age_err").innerHTML = '請輸入有效的年齡';
        document.forms["favorite_index"]["age"].focus();
        valid = false;
    } else {
        document.getElementById("age_err").style.visibility = "hidden";
    }

    if (!num_reg.test(hkid) || hkid.length != 4) {
        document.getElementById("hkid_err").style.visibility = "visible";
        document.getElementById("hkid_err").innerHTML = '請輸入有效的HKID';
        document.forms["favorite_index"]["hkid"].focus();
        valid = false;
    } else {
        document.getElementById("hkid_err").style.visibility = "hidden";
    }

    if (!num_reg.test(contact) || contact.length != 8) {
        document.getElementById("contact_err").style.visibility = "visible";
        document.getElementById("contact_err").innerHTML = '請輸入有效的聯繫電話';
        document.forms["favorite_index"]["contact"].focus();
        valid = false;
    } else {
        document.getElementById("contact_err").style.visibility = "hidden";
    }

    if (!num_reg.test(vote) || vote.length >= 2 || vote == 1) {
        document.getElementById("vote_err").style.visibility = "visible";
        document.getElementById("vote_err").innerHTML = '請選擇有效的恒指成份股';
        document.forms["favorite_index"]["vote"].focus();
        valid = false;
    } else {
        document.getElementById("vote_err").style.visibility = "hidden";
    }

    if (valid == false) {
        return false;
    } else {
        // After Successful Submission
        var frm = document.getElementsByName('favorite_index')[0];
        frm.submit();
        frm.reset();
        alert('多謝你的投票。');
        return true;
    }
}

// Clear Error Message After Click on Selector
var name_select = document.querySelector('#name');
name_select.addEventListener('click', function (e) {
    document.getElementById("name_err").style.visibility = "hidden";
})

var age_select = document.querySelector('#age');
age_select.addEventListener('click', function (e) {
    document.getElementById("age_err").style.visibility = "hidden";
})

var hkid_select = document.querySelector('#hkid');
hkid_select.addEventListener('click', function (e) {
    document.getElementById("hkid_err").style.visibility = "hidden";
})

var contact_select = document.querySelector('#contact');
contact_select.addEventListener('click', function (e) {
    document.getElementById("contact_err").style.visibility = "hidden";
})

var vote_select = document.querySelector('#vote');
vote_select.addEventListener('click', function (e) {
    document.getElementById("vote_err").style.visibility = "hidden";
})
