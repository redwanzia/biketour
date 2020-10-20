import React from 'react';
import TourFilter from './TourFilter';
import TourList from './TourList';
import { withTourConsumer } from '../context.js';
import Loading from './Loading';

function TourContainer({ context }) {
	const { loading, tours, sortedTours } = context;

	if (loading) {
		return <Loading />;
	}
	return (
		<div>
			<TourFilter tours={tours} />
			<TourList tours={sortedTours} />
		</div>
	);
}

export default withTourConsumer(TourContainer);

// import React from 'react'
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context.js'
// import Loading from './Loading';
// import RoomContainer from './RoomContainer';

// const RoomContainer = () => {
//   return (

//     <RoomConsumer>
//     {
//       (value)=>{
//        const {loading,sortedTours,tours} = value
//        if(loading){
//          return <Loading/>
//        }
//         return (
//           <div>
//             hello from tours RoomContainer
//             <RoomFilter tours={tours} />
//             <RoomList tours={sortedTours}/>
//           </div>
//         )}
//     }
//     </RoomConsumer>
//   )
// }

// export default RoomContainer
