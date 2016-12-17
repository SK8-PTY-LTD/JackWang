/**
 * Created by wanghao on 10/12/2016.
 */
window.onload = function () {
    var cv_btn = document.getElementsByTagName("input");
    var cv_content = document.getElementsByClassName("CV");

    for (var i=0;i<cv_btn.length;i++)
    {
        cv_btn[i].index=i;
        cv_btn[i].onclick=function () {
            for (var i=0;i<cv_btn.length;i++)
            {
                cv_btn[i].className=null;
                cv_content[i].style.display='none';
            }
            this.className='active';
            cv_content[this.index].style.display='block';
        }
    }


    var my_photo=document.getElementsByClassName("myphoto");
    var show=document.getElementsByClassName("show")
    for (var i=0;i<my_photo.length;i++)
    {
        my_photo[i].onmouseover=function(){
            for (var i=0;i<my_photo.length;i++)
            {
                my_photo[i].className = "myphoto";
            }
        this.className="myphoto show";
        this.focus();
        }
    }
}