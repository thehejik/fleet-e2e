/*
Copyright © 2023 - 2024 SUSE LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package e2e_test

import (
	"os"
	"strings"
	"testing"
	"time"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/rancher-sandbox/ele-testhelpers/kubectl"
	"github.com/rancher-sandbox/ele-testhelpers/tools"
)

const (
	ciTokenYaml         = "../assets/local-kubeconfig-token-skel.yaml"
	localKubeconfigYaml = "../assets/local-kubeconfig-skel.yaml"
	userName            = "root"
	userPassword        = "r0s@pwd1"
	vmNameRoot          = "node"
)

var (
	arch               string
	CertManagerVersion string
	clusterName        string
	clusterNS          string
	rancherHostname    string
	k8sUpstreamVersion string
	k8sVersion         string
	rancherChannel     string
	rancherHeadVersion string
	rancherVersion     string
)

/**
 * Execute RunHelmBinaryWithCustomErr within a loop with timeout
 * @param s options to pass to RunHelmBinaryWithCustomErr command
 * @returns Nothing, the function will fail through Ginkgo in case of issue
 */
func RunHelmCmdWithRetry(s ...string) {
	Eventually(func() error {
		return kubectl.RunHelmBinaryWithCustomErr(s...)
	}, tools.SetTimeout(2*time.Minute), 20*time.Second).Should(Not(HaveOccurred()))
}

func FailWithReport(message string, callerSkip ...int) {
	// Ensures the correct line numbers are reported
	Fail(message, callerSkip[0]+1)
}

func TestE2E(t *testing.T) {
	RegisterFailHandler(FailWithReport)
	RunSpecs(t, "Fleet End-To-End Test Suite")
}

var _ = BeforeSuite(func() {
	arch = os.Getenv("ARCH")
	CertManagerVersion = os.Getenv("CERT_MANAGER_VERSION")
	clusterName = os.Getenv("CLUSTER_NAME")
	clusterNS = os.Getenv("CLUSTER_NS")
	rancherHostname = os.Getenv("PUBLIC_DNS")
	k8sUpstreamVersion = os.Getenv("K8S_UPSTREAM_VERSION")
	k8sVersion = os.Getenv("K8S_VERSION_TO_PROVISION")
	rancherVersion = os.Getenv("RANCHER_VERSION")

	// Extract Rancher Manager channel/version to install
	if rancherVersion != "" {
		s := strings.Split(rancherVersion, "/")
		rancherChannel = s[0]
		rancherVersion = s[1]
		rancherHeadVersion = s[2]
	}
})

