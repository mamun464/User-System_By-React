// CustomCheckbox.tsx
import React from 'react';

const CustomCheckbox: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => {
    return (
        <label className={`custom-checkbox ${checked ? 'checked' : ''}`}>
            <input type="checkbox" className="w-4 h-4" checked={checked} onChange={onChange} />
            <span className="checkmark"></span>
        </label>
    );
};

export default CustomCheckbox;
