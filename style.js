let timer=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.fontSize = "36px"
        // time.style.border = "black 1px dotted"
        time.style.maxWidth ="200px"
        setTimeout(() => {
            time.style.color = "orange";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.style.color = "white";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.style.color = "green";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.style.color = "orange";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.style.color = "white";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.style.color = "green";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.style.color = "orange";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.style.color = "white";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.style.color = "green";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.style.color = "orange";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.color = "blue";
                                                    
                                                    time.innerHTML = "Happy Independence Day"
                                                    
                                                },1000)

                                            },1000)

                                        },1000)

                                    },1000)

                                },1000)

                            },1000)

                        },1000)

                    },1000)

                },1000)

            },1000)

        }, 1000);