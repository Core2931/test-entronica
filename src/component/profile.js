import { useState } from "react";
import "../App.css";
import axios from "axios";

const ProfileForm = () => {
    const [data, setData] = useState({
        username:"",
        nickname:"",
        firstname:"",
        lastname:"",
        position:"",
        nationality:"",
        telephone:"",
        date:"",
        address:"",
        subdistrict:"",
        district:"",
        province:"",
        postalcode:"",
        facebook:"",
        lineid:"",
        instargram:"",
    });

    
    // const onChange = (event) => {
    //     setData({...data,[event.target.name]:event.target.value })
    // }
    const useronChange = (event) => {
        setData({...data, [event.target.name]:event.target.value})
      }
      
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/profile', data)
        console.log("saved !!")
    }
    return (
        <>
        <div class="container-profile">
            <div class="information">
            <div class="user-information">
                <h2>USER INFORMATION</h2>
                <form class="form-information">
                    <input type="file" class="upload-cover-photo"></input>
                    <input type="file" class="upload-img"></input>
                    
                    <br/>
                    <div class="row">
                    <label for="username" class="username">USERNAME</label>
                    <input type="text" class="username" name="username" value={data.username} onChange={useronChange}/>    
                    <label for="nickname" class="nickname">NICK NAME</label>
                    <input type="text" class="nickname" name="nickname" value={data.nickname} onChange={useronChange} />
                    </div>

                    <div class="row">
                    <label for="firstname" class="firstname">FIRST NAME</label>
                    <input type="text" class="firstname" name="firstname" value={data.firstname} onChange={useronChange}></input>
                    <label for="lastname" class="lastname" >LAST NAME</label>
                    <input type="text" class="lastname" name="lastname" value={data.lastname} onChange={useronChange}></input>
                    </div>

                    <div class="row">
                        <label for="position" class="position">POSITION</label>
                        <select class="position" name="position" value={data.position} onChange={useronChange}>
                            <option value="" disabled selected>Please Select</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="expert">Expert</option>
                        </select>
                        <label for="nationality" class="nationality">NATIONALITY</label>
                        <input class="nationality" name="nationality" value={data.nationality} onChange={useronChange}></input>
                    </div>

                    <div class="row">
                        <label for="telephone-number">TELEPHONE NUMBER</label>
                        <input class="telephone-number" name="telephone" value={data.telephone} onChange={useronChange}></input>

                        <label for="date" class="date">STARTIGN DATE</label>
                        <input type="date"  name="date"
                        value={data.date} onChange={useronChange}
                        min="2022-07-17" max="2023-12-31"
                        />
                    </div>
                </form>
            </div></div>

            <div class="information">
            <div class="contact-information">
                <h2>CONTACT INFORMATION</h2>
                <form class="contact-information">
                <div class="row">    
                    <label for="address" class="address">ADDRESS</label>
                    <input type="text" class="address" placeholder="Address" name="address" value={data.address} onChange={useronChange}></input>
                </div>
                <div class="row">
                    <label for="province" class="province">Province</label>
                    <select class="province" name="province" value={data.province} onChange={useronChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="bangkok">Bangkok</option>
                            <option value="lopburi">Lopburi</option>
                    </select>
                    <label for="sub-district" class="sub-district">SUB DISTRICT</label>
                    <select class="sub-district" name="subdistrict" value={data.subdistrict} onChange={useronChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                    </select>
                    <label for="district" class="district">District</label>
                    <select class="district" name="district" value={data.district} onChange={useronChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                    </select>
                    
                    <label for="postal-code" class="postal-code">POSTAL CODE</label>
                    <select class="postal-code" name="postalcode" value={data.postalcode} onChange={useronChange}>
                            <option value="" disabled selected>Please select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                    </select>
                    </div>
                    <div class="row">
                    <label for="facebook" class="facebook">FACEBOOK</label>
                    <input type="text" class="facebook" name="facebook" value={data.facebook} onChange={useronChange}></input>
                    <label for="line-id" class="line-id">LINE ID</label>
                    <input type="text" class="line-id" name="lineid" value={data.lineid} onChange={useronChange}></input>
                    <label for="instargram" class="instargram">INSTARGRAM</label>
                    <input type="text" class="instargram" name="instargram" value={data.instargram} onChange={useronChange}></input>
                    </div>
                </form>
            </div></div>

            <div class="information">
            <div class="eduucation-information">
                <h2>EDUCATION INFORMATION</h2>
                <button>ADD EDUCATION</button>
                <p>Year เส้นtimeline universityname</p>
            </div></div>
            <div class="information">
            <div class="experience-information">
            <h2>EXPERIENCE INFORMATION</h2>
                <button>ADD EXPERIENCE</button>
                <p>experience 2018-2021</p>
            </div></div>
            <div class="information">
            <div class="skill-information">
                <h2>SKILL INFORMATION</h2>
                <button>ADD SKILL</button>
                <p>python 1 หลอดพลัง</p>
            </div></div>
            <div class="information">
            <div class="interests-information">
                <h2>INTERESTS INFORMATION</h2>
                <button>ADD INTERESTS</button>
                <p>SONG<button>X</button></p>
            </div></div>
            <div class="information">
            <div class="guild-information">
                <h2>GUILD INFORMATION</h2>
                <button>ADD GUILD</button>
                <p>K-POP<button>X</button></p>
            </div></div>
            <button type="submit" onClick={handleSubmit} > Submit </button>
        </div>
        </>
    )
}

export default ProfileForm;