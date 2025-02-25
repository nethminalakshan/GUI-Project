function validation(values){

    alert("")
    let error ={}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const name_pattern = /^[a-zA-Z]{2,20}$/
    const phone_pattern = /^[0-9]{10}$/


    if (values.name === '') {
        error.name = 'Name is required'
    }
    else if(!name_pattern.test(values.name)){
        error.name = 'Name is invalid'
    }
    else{
        error.name = ''
    }

    if (values.phone === '') {
        error.phone = 'Phone number is required'
    }
    else if(!phone_pattern.test(values.phone)){
        error.phone = 'Phone number is invalid'
    }
    else{
        error.phone = ''
    }


    if(values.email === ''){
        error.email = 'Email is required'
    }
    else if(!email_pattern.test(values.email)){
        error.email = 'Email is invalid'
    }
    else{
        error.email = ''
    }

    if(values.password === ''){
        error.password = 'Password is required'
    }
    else if(!password_pattern.test(values.password)){
        error.password = 'Password is invalid'
    }
    else{
        error.password = ''
    }

    return error;



}

export default validation;