// const MessageSkeleton = () => {
// 	return (
// 		<>
// 			<div className='flex gap-3 items-center'>
// 				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
// 				<div className='flex flex-col gap-1'>
// 					<div className='skeleton h-4 w-40'></div>
// 					<div className='skeleton h-4 w-40'></div>
// 				</div>
// 			</div>
// 			<div className='flex gap-3 items-center justify-end'>
// 				<div className='flex flex-col gap-1'>
// 					<div className='skeleton h-4 w-40'></div>
// 				</div>
// 				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
// 			</div>
// 		</>
// 	);
// };
// export default MessageSkeleton;


// const MessageSkeleton = () => {
//     const skeletonStyle = {
//       backgroundColor: '#e0e0e0', // Light grey for skeleton background
//       borderRadius: '4px', // Rounded corners for skeleton elements
//     };
  
//     return (
//       <>
//         <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//           <div style={{ ...skeletonStyle, width: '40px', height: '40px', borderRadius: '50%' }}></div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
//             <div style={{ ...skeletonStyle, height: '16px', width: '160px' }}></div>
//             <div style={{ ...skeletonStyle, height: '16px', width: '160px' }}></div>
//           </div>
//         </div>
//         <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-end' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
//             <div style={{ ...skeletonStyle, height: '16px', width: '160px' }}></div>
//           </div>
//           <div style={{ ...skeletonStyle, width: '40px', height: '40px', borderRadius: '50%' }}></div>
//         </div>
//       </>
//     );
//   };
  
//   export default MessageSkeleton;
  

const MessageSkeleton = () => {
    const skeletonStyle = {
      backgroundColor: '#e0e0e0', // Light grey for skeleton background
      borderRadius: '4px', // Rounded corners for skeleton elements
    };
  
    const textSkeletonStyle = {
      ...skeletonStyle,
      backgroundColor: '#c7c7c7', // Darker grey for text skeleton to contrast with background
    };
  
    return (
      <>
        {/* Skeleton for incoming message */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* User avatar */}
          <div style={{ ...skeletonStyle, width: '40px', height: '40px', borderRadius: '50%' }}></div>
          
          {/* Message content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {/* Sender's name and message content skeletons */}
            <div style={{ ...textSkeletonStyle, height: '16px', width: '160px' }}></div>
            <div style={{ ...textSkeletonStyle, height: '16px', width: '160px' }}></div>
          </div>
        </div>
        
        {/* Skeleton for outgoing message */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-end' }}>
          {/* Message content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ ...textSkeletonStyle, height: '16px', width: '160px' }}></div>
          </div>
  
          {/* User avatar */}
          <div style={{ ...skeletonStyle, width: '40px', height: '40px', borderRadius: '50%' }}></div>
        </div>
      </>
    );
  };
  
  export default MessageSkeleton;
  