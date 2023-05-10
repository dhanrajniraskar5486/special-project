import React from 'react'
import styles from './scrollbar.module.css'

function Card() {
    const CardArray = [{
        image: "https://theshillongtimes.com/wp-content/uploads/2022/02/Rohit-Sharma.png",
        Name: "ROHIT SHARMA",
        Role: "CAPTAIN/BATSMAN",
    },
    {
        image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-80340116/80340116.jpg",
        Name: "SHUBHMAN GILL",
        Role: "BATSMAN",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw0HgO8UrFJCdIe6C6d5cfW1DNDMN2FWA-g&usqp=CAU",
        Name: "VIRAT KOHLI",
        Role: "BATSMAN",
    }, 
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bWIEpUbKjJP47DqBDXMTEcGnt_AS2_5t2g&usqp=CAU",
        Name: "CHETESHWAR PUJARA",
        Role: "BATSMAN",
        },
    {
        image: "https://assets.telegraphindia.com/telegraph/2021/Nov/1636743428_13spotestrahane_dc.jpg",
        Name: "AJINKYA RAHANE",
        Role: "BATSMAN",
        },
    {
        image: "https://staticg.sportskeeda.com/editor/2023/02/ccff9-16766321177091-1920.jpg",
        Name: "KS BHARAT",
        Role: "WICKET KEEPER/BATSMAN",
        },
    {
        image: "https://www.cricket.com.au/-/media/EF14566FAF8440E0BE518768BA6B674E.ashx",
        Name: "RAVICHANDRAN ASHWIN",
        Role: "AllROUNDER",
        },
    {
        image: "https://static.toiimg.com/thumb/msid-79984690,width-400,resizemode-4/79984690.jpg",
        Name: "RAVINDRA JADEJA",
        Role: "ALLROUNDER",
        },
    {
        image: "https://static.toiimg.com/thumb/msid-79872250,width-400,resizemode-4/79872250.jpg",
        Name: "MOHAMMED SHAMI",
        Role: "BOWLER/FASTER",
        },
    {
        image: "https://www.sportzcraazy.com/wp-content/uploads/2020/02/umesh-yadav.jpeg",
        Name: "UMESH YADAV",
        Role: "BOWLER/FASTER",
        },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtSUSC762O4cg7aHq9o_v0_ISACJ4AXo7sA&usqp=CAU",
        Name: "SHARDUL THAKUR",
        Role: "BOWLER/MEDIUM FASTER",
    }
    ]
    return (
         <div >
          <img src="https://wallpaperaccess.com/full/5747916.png"/>
         <h3 className={styles.Div1}>INDIAN TEST SQUAD</h3>
         <h3 className={styles.Div2}>PLAYERS PROFILE</h3>
        <div className={styles.parent}>
            {CardArray.map((data) => (

                    <div className={styles.Card}>
                    <img className={styles.image} src={data.image} />
                    <p className={styles.Name}>{data.Name}</p>
                    <p className={styles.team}>{data.Role}</p>
                    

                </div>
            ))}
        </div>
        </div>
    )
}

export default Card