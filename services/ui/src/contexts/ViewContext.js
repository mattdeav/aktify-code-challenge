import {createContext, useContext, useEffect} from 'react';

const ViewContext = createContext({
    setTitle: () => {},
    title: 'Aktify'
});

export default ViewContext;

export const useViewTitle = (title) => {
    const {setTitle} = useContext(ViewContext);
    useEffect(() => setTitle(title));
};
