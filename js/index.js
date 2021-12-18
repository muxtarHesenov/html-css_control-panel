function controlPanel() {
    var myDiv = document.getElementById("demo")

    var mWidthI = document.getElementById("mWidthI").value
    var mWidthS = document.getElementById("mWidthS").value

    var mHeigthI = document.getElementById("mHeigthI").value
    var mHeigthS = document.getElementById("mHeigthS").value

    var mBackS = document.getElementById("mBackS").value

    var mBackIgI = document.getElementById("mBackIgI").value

    var mBorderI = document.getElementById("mBorderI").value
    var mBorderS = document.getElementById("mBorderS").value

    var mMargin_TopI = document.getElementById("mMargin_TopI").value
    var mMargin_TopS = document.getElementById("mMargin_TopS").value

    var mMargin_BottomI = document.getElementById("mMargin_BottomI").value
    var mMargin_BottomS = document.getElementById("mMargin_BottomS").value

    var mMargin_RightI = document.getElementById("mMargin_RightI").value
    var mMargin_RightS = document.getElementById("mMargin_RightS").value

    var mMargin_LeftI = document.getElementById("mMargin_LeftI").value
    var mMargin_LeftS = document.getElementById("mMargin_LeftS").value

    var mTransformI = document.getElementById("mTransformI").value
    var mTransformS = document.getElementById("mTransformS").value

    myDiv.style.width = mWidthI + mWidthS

    myDiv.style.height = mHeigthI + mHeigthS

    myDiv.style.background = mBackS

    myDiv.style.backgroundImage = "url" + '("' + mBackIgI + '")'

    myDiv.style.borderRadius = mBorderI + mBorderS

    myDiv.style.marginTop = mMargin_TopI + mMargin_TopS

    myDiv.style.marginBottom = mMargin_BottomI + mMargin_BottomS

    myDiv.style.marginRight = mMargin_RightI + mMargin_RightS

    myDiv.style.marginLeft = mMargin_LeftI + mMargin_LeftS

    
    if (mTransformS == "rotate" || mTransformS == "skewX" || mTransformS == "skewY" ) {
        myDiv.style.transform = mTransformS + '(' + mTransformI + 'deg)'
    }else{
        myDiv.style.transform = mTransformS + "(" + mTransformI + ")"
    }
};