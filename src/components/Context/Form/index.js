import {useState,useEffect} from 'react'

function Form({addContact,contacts}) {

    const [form,setForm] = useState({fullName:"",phone_number:""}) // alttaki addContacte giden form bu!

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})        // inputa değer girmeni sağlıyor.
    }

    const onSubmit = (e) => {
        e.preventDefault()              // sayfanın tekrar yenilenmemesini sağlıyor                       

        if (form.fullName === "" || form.phone_number === "") {
            return false;
        }

        addContact([...contacts,form])  // addContacta giden setContact i form ile güncelliyoruz. 
        console.log(form);
        
    }

    useEffect (()=>{     // contacts te bir değişim olduğunda alttaki kodu yap. Yani add butonuna basılınca inputların içini boşaltıyor.
        setForm({fullName:"",phone_number:""})      // valuelere göre değer verdiği için valueleri eklemeyi unutma
    },[contacts])                       // tek tek yazmak yerine {fullName:"",phone_number:""} bunu bir değere atayaıp kullanabilirsin


    return (
    <form  onSubmit={onSubmit} >

        <div>
            <input name="fullName" placeholder='Full Name' onChange={onChangeInput} value={form.fullName} />
        </div>
        <div>
            <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number} />
        </div>

        <div className='btn' >
            <button>Add Button</button>
        </div>

    </form>
  )
}

export default Form