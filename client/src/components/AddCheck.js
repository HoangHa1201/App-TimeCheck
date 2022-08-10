import { useState } from "react"

const AddCheck = () => {
    var dateNow = new Date();
    return (
        <div className="checkContentAdd">
            <div className="checkContentHead">
                <div className="checkContentHeadTime">
                    {setInterval(() => {
                        dateNow = new Date();
                        var time = dateNow.toLocaleTimeString();
                        document.querySelector(".checkContentHeadTime").innerHTML = time;
                    }, 1000)}
                </div>
                <div className="checkContentHeadDay">
                    {setInterval(() => {
                        dateNow = new Date();
                        var dateNumber = dateNow.getDay();
                        var dateOfWeek = "";
                        switch (dateNumber) {
                            case 0:
                                dateOfWeek = "Chủ nhật"; break;
                            case 1:
                                dateOfWeek = "Thứ hai"; break;
                            case 2:
                                dateOfWeek = "Thứ ba"; break;
                            case 3:
                                dateOfWeek = "Thứ tư"; break;
                            case 4:
                                dateOfWeek = "Thứ năm"; break;
                            case 5:
                                dateOfWeek = "Thứ sáu"; break;
                            case 6:
                                dateOfWeek = "Thứ bảy"; break;
                        }
                        var day = dateOfWeek + "-" + dateNow.toLocaleDateString();
                        document.querySelector(".checkContentHeadDay").innerHTML = day;
                    }, 1000)}
                </div>
            </div>
            <div className="checkContentBodyChecked">
                <label>TimeChecking here!</label>
                <input type="text" placeholder="Nhập Id của bạn" />
                <div className="checkBtn">
                    <div className="checkContentBodyCheckin chekedShareBtn">
                        Checkin
                        
                    </div>
                    <i class="fa-regular fa-circle-check "></i>
                    <div className="checkContentBodyCheckout chekedShareBtn">
                        Checkout
                        
                    </div>
                    <i class="fa-regular fa-circle-check disable"></i>
                </div>

            </div>
        </div>
    )
}

export default AddCheck;