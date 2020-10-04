    
    function removeItems(){
        var removelinks = document.getElementsByClassName("remove");
        
        for(var i=0;i<removelinks.length;i++)
        {
            var link = removelinks[i];
            link.addEventListener('click',function(e){
                var linkclicked = e.target;
                linkclicked.parentElement.parentElement.parentElement.parentElement.remove();
                UpdatecartTotal();
            })
        }
    }

   /*  var searchbar = document.getElementById("searchbar");
    searchbar.addEventListener('keyup',function(e){
        var foodcardiv=document.getElementsByClassName("food-card");
        
        for(var i=0;i<foodcardiv.length;i++)
        {
           console.log(foodcardiv.innerText);
        }
    }) */
 

    var cartitembtns = document.getElementsByClassName("btn-card");
    var cartable= document.getElementById("table");
    for(var i=0;i<cartitembtns.length;i++)
    {
        cartitembtns[i].addEventListener('click',function(e){
            var itemdiv = e.target.parentElement;
            var imgsrc = itemdiv.getElementsByTagName("img")[0].src;
            var dish=itemdiv.getElementsByTagName("h4")[0].innerText;
            var cost=itemdiv.getElementsByTagName("h4")[1].innerText;
            var oldcart = cartable.getElementsByTagName("tr");
            var newele=document.createElement("tr");
            newele.innerHTML=
            `<td>
            <div class="cart-info">
            <img src="${imgsrc}" />
                <div>
                    <p style="font-weight: normal;">${dish}</p>
                    <small>${cost}</small>
                    <br>
                    <button class="remove">Remove</button>
                </div>

            </div>
        </td>
        <td><input type="number" id="q" value="1" min="1"></td>
        <td>${cost}</td>`
        cartable.appendChild(newele);
        UpdatecartTotal();
        removeItems();
        });
    }
 


function UpdatecartTotal(){
    var total=0;
    var t= document.getElementById("table");
    var rows =t.getElementsByTagName("tr");
    var fquantity;
    for(var i=1;i<rows.length;i++)
    {
        var cost = rows[i].getElementsByTagName("td")[2];
        var quantity = rows[i].getElementsByTagName("td")[1];
        var price = parseFloat(cost.innerText.replace('$',''));
        var eachcost = rows[i].getElementsByTagName("td")[0];
        
        quantity.addEventListener('change',function(e){
        
            fquantity = e.target.value;
            var qchanged=e.target.parentElement.parentElement;
            var cost2change=qchanged.getElementsByTagName("td")[2];
            var costofeach=qchanged.getElementsByTagName("td")[0];
            var eachcostf = costofeach.getElementsByTagName("small")[0];
            var fq=eachcostf.innerText;
            var eachcostf2=parseInt(fq.replace("$",""));
            console.log(cost2change.innerHTML);
            price = fquantity*eachcostf2;
            cost2change.innerText = price+" $";
            UpdatecartTotal();
        })
        total = price+total;
        
    }
    var tot = document.getElementById("bill-table");
    var subtrow =tot.getElementsByTagName("tr")[0];
    var taxrow = tot.getElementsByTagName("tr")[1];
    var totrow = tot.getElementsByTagName("tr")[2];
    subtrow.getElementsByTagName("td")[1].innerText=total +" $"
    var tax = parseFloat((0.1*total).toFixed(1));
    var net = total+tax;
    taxrow.getElementsByTagName("td")[1].innerText=tax +" $"
    totrow.getElementsByTagName("td")[1].innerText=net +" $"
}

