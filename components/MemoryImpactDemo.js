import React, { useState, useEffect, useCallback } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MemoryImpactDemo = () => {
  const [memoryData, setMemoryData] = useState([]);
  const [isAllocating, setIsAllocating] = useState(false);
  const [allocationInterval, setAllocationInterval] = useState(null);
  const [memoryHog, setMemoryHog] = useState([]);

  const measureMemory = useCallback(async () => {
    if ('measureUserAgentSpecificMemory' in performance) {
      try {
        const result = await performance.measureUserAgentSpecificMemory();
        return result.bytes / (1024 * 1024); // Convert to MB
      } catch (error) {
        console.error('Error measuring memory:', error);
        return null;
      }
    } else {
      console.warn('measureUserAgentSpecificMemory API not available');
      return null;
    }
  }, []);

  const simulateHeavyOperation = useCallback(() => {
    const startTime = performance.now();
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sin(i) * Math.cos(i);
    }
    const endTime = performance.now();
    return endTime - startTime;
  }, []);

  const allocateMemory = useCallback(async () => {
    const largeObject = {};
    for (let i = 0; i < 10000; i++) {
      largeObject[Math.random().toString(36)] = Math.random()
        .toString(36)
        .repeat(1000);
      largeObject[Math.random().toString(36)] = Math.random()
        .toString(36)
        .repeat(1000);
      largeObject[Math.random().toString(36)] = Math.random()
        .toString(36)
        .repeat(1000);
      largeObject[Math.random().toString(36)] = Math.random()
        .toString(36)
        .repeat(1000);
    }
    setMemoryHog((prev) => [...prev, largeObject]);

    const memoryUsage = await measureMemory();
    const responseTime = simulateHeavyOperation();

    setMemoryData((prev) => [
      ...prev,
      {
        time: prev.length,
        memoryUsage: memoryUsage,
        responseTime: responseTime,
      },
    ]);
  }, [measureMemory, simulateHeavyOperation]);

  const startAllocation = useCallback(() => {
    setIsAllocating(true);
    const interval = setInterval(allocateMemory, 1000);
    setAllocationInterval(interval);
  }, [allocateMemory]);

  const stopAllocation = useCallback(() => {
    setIsAllocating(false);
    if (allocationInterval) {
      clearInterval(allocationInterval);
    }
  }, [allocationInterval]);

  useEffect(() => {
    return () => {
      if (allocationInterval) {
        clearInterval(allocationInterval);
      }
    };
  }, [allocationInterval]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Memory Impact Demo
      </h1>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={startAllocation}
          disabled={isAllocating}
          style={{
            padding: '10px 15px',
            marginRight: '10px',
            backgroundColor: isAllocating ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isAllocating ? 'not-allowed' : 'pointer',
          }}
        >
          Start Memory Allocation
        </button>
        <button
          onClick={stopAllocation}
          disabled={!isAllocating}
          style={{
            padding: '10px 15px',
            backgroundColor: !isAllocating ? '#ccc' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: !isAllocating ? 'not-allowed' : 'pointer',
          }}
        >
          Stop Memory Allocation
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            width: '48%',
          }}
        >
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
            Memory Usage
          </h2>
          <p>
            {memoryData.length > 0
              ? `${
                  memoryData[memoryData.length - 1].memoryUsage?.toFixed(2) ||
                  'N/A'
                } MB`
              : 'N/A'}
          </p>
        </div>
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            width: '48%',
          }}
        >
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
            Last Response Time
          </h2>
          <p>
            {memoryData.length > 0
              ? `${memoryData[memoryData.length - 1].responseTime.toFixed(
                  2,
                )} ms`
              : 'N/A'}
          </p>
        </div>
      </div>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '15px',
        }}
      >
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
          Memory Usage and Response Time
        </h2>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={memoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="memoryUsage"
                stroke="#8884d8"
                name="Memory Usage (MB)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="responseTime"
                stroke="#82ca9d"
                name="Response Time (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MemoryImpactDemo;
