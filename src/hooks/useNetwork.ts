import { useCallback } from 'react';
import { useStore } from '@/store/useStore';
import { networkAPI } from '@/api/network';
import type { NodeInfo, Message } from '@/types/network';

export function useNetwork() {
  const { nodes, messages, isLoading, error, addNode, removeNode, addMessage, setLoading, setError } = useStore();

  const fetchNodeStatus = useCallback(async (nodeId: string) => {
    try {
      setLoading(true);
      const status = await networkAPI.getNodeStatus(nodeId);
      addNode(status as NodeInfo);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch node status'));
    } finally {
      setLoading(false);
    }
  }, [addNode, setLoading, setError]);

  const sendMessage = useCallback(async (message: Omit<Message, 'id' | 'timestamp'>) => {
    try {
      setLoading(true);
      const newMessage: Message = {
        ...message,
        id: crypto.randomUUID(),
        timestamp: new Date()
      };
      addMessage(newMessage);
      // Here you would typically send the message through your network API
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send message'));
    } finally {
      setLoading(false);
    }
  }, [addMessage, setLoading, setError]);

  return {
    nodes,
    messages,
    isLoading,
    error,
    fetchNodeStatus,
    sendMessage
  };
}