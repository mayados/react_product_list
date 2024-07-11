/**
 * 
 * @param {boolean} checked 
 * @param {(v: boolean) => void} onChange 
 * @param {string} label 
 * @param {string} id 
 */

export function Checkbox({id, checked, onChange, label}){

    return <div className="form-check">
                <input type="checkbox"
                id={id}
                 className="form-check-input" 
                 checked={checked} 
                 onChange={(e)=>onChange(e.target.checked)}
                 />
                 <label htmlFor={id} className="form-check-label">{label}</label>
            </div>

}