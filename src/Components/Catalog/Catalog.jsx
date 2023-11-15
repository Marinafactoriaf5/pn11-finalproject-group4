import './Catalog.css'

function Catalog (){
    return(
     <span className='card'> 
        <img className='eventImage'src='https://applications-media.feverup.com/image/upload/f_auto,w_320,h_320/fever2/plan/photo/376ad52a-7c9c-11ee-8438-1a6372252704.jpg'></img>
     <div className='eventText'>
     <h4 className='eventName'>Event Name</h4>
        <p className='date'>Date</p>
    </div>   
     </span>
    )
}

export default Catalog;

// return (
//     <div className="catalogo">
//         <h2>Lista de Álbumes</h2>
//         <div className="getAlbums">
//             {albumNames.length > 0 ? (
//                 albumNames.slice(0,8).map((album) => (
//                     <div key={album.id} className="card">
//                         <img src={album.album.cover_medium} className="cover" alt="Album Cover" />
//                         <p></p>
//                         <p>{album.artist.name}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     </div>
// );