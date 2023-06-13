import { useState ,useEffect } from "react";
import { getMessage } from "../helpers/getMessage";
import { MessageType } from "../types/types";

type state = {
    data: MessageType;
    isLoading: boolean;
};

export const useFetchMessage = (message: string): state => {

    const [state, setState] = useState<state>({
        data: {} as MessageType,
        isLoading: true,
    });

    if (message === '') {
        return {
            data: {} as MessageType,
            isLoading: false,
        }
    }

    const loadMessage = async () => {
        try {
            const data = await getMessage(message);
            setState({
                data,
                isLoading: false,
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadMessage();
    }, [message]);

    return state;
}