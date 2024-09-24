import React, { useState } from 'react';

const TreeNode = ({ node, onclickFunc }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(false);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree-node  relative">
      <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded flex flex-row items-center px-10' : ' flex flex-row items-center px-10'}`}>
        <a className='cursor-pointer' key={node.id} id={node.id} x-value={node.id} onClick={onclickFunc}>    {node.name}
        </a>
        {node.children.length > 0 ?

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          :
          ''
        }

      </div>
      {isExpanded && (
        <ul className="child-nodes absolute bg-white right-full top-0 min-w-20  mr-0.5">
          {node.children.map((childNode: any) => (
            <li key={childNode.id} className='cursor-pointer' onClick={onclickFunc} id={childNode.id} x-value={node.id}>
              <TreeNode node={childNode} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function TreeView({ treeData, onclickFunc }: any) {
  return (
    <div className='bg-white'>
      <ul>
        <li className='flex flex-row items-center gap-2'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <a className='cursor-pointer' id="0" x-value={0} onClick={onclickFunc}>
            اصلی
          </a>
        </li>
      </ul>
      {treeData.map((rootNode: any) => (
        <TreeNode key={rootNode.id} node={rootNode} onclickFunc={onclickFunc} />
      ))}
    </div>
  );
};
