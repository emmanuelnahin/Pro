
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { UploadTab } from './components/UploadTab';
import { DesignTab } from './components/DesignTab';
import { VisualTab } from './components/VisualTab';
import { AnalysisTab } from './components/AnalysisTab';
import { ExportTab } from './components/ExportTab';
import { OrgNode, ViewMode } from './types';
import { initialNodes } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('carga');
  const [nodes, setNodes] = useState<OrgNode[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('vertical');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Cargar datos guardados o iniciar vacíos para forzar el uso del simulador/carga
  useEffect(() => {
    const saved = localStorage.getItem('luxanalitica_org_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) setNodes(parsed);
      } catch (e) {
        console.error("Error cargando datos locales", e);
      }
    }
  }, []);

  // Guardar datos automáticamente
  useEffect(() => {
    if (nodes.length > 0) {
      localStorage.setItem('luxanalitica_org_v3', JSON.stringify(nodes));
    }
  }, [nodes]);

  const handleUpdateNode = useCallback((updatedNode: OrgNode) => {
    setNodes(prev => prev.map(n => n.id === updatedNode.id ? updatedNode : n));
  }, []);

  const handleAddNode = useCallback((newNode: OrgNode) => {
    setNodes(prev => [...prev, newNode]);
    setSelectedNodeId(newNode.id);
  }, []);

  const handleDeleteNode = useCallback((id: string) => {
    if (confirm('¿Estás seguro de eliminar este colaborador? Los subordinados quedarán sin jefe asignado.')) {
      setNodes(prev => {
        return prev
          .filter(n => n.id !== id)
          .map(n => n.parentId === id ? { ...n, parentId: null } : n);
      });
      setSelectedNodeId(null);
    }
  }, []);

  const handleImport = useCallback((newNodes: OrgNode[]) => {
    setNodes(newNodes);
    setActiveTab('diseno');
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="flex-1 bg-white rounded-b-2xl shadow-xl border border-slate-200 overflow-hidden relative">
            {activeTab === 'carga' && <UploadTab onImport={handleImport} />}
            {activeTab === 'diseno' && (
              <DesignTab 
                nodes={nodes} 
                selectedNodeId={selectedNodeId}
                setSelectedNodeId={setSelectedNodeId}
                onUpdateNode={handleUpdateNode}
                onAddNode={handleAddNode}
                onDeleteNode={handleDeleteNode}
              />
            )}
            {activeTab === 'visualizacion' && (
              <VisualTab nodes={nodes} viewMode={viewMode} setViewMode={setViewMode} />
            )}
            {activeTab === 'analisis' && <AnalysisTab nodes={nodes} />}
            {activeTab === 'exportacion' && <ExportTab nodes={nodes} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
